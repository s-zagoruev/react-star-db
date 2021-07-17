import React, {Component} from 'react'
import Header from '../header'
import SwapiService from "../../services/swapi-service"
import DummySwapiService from "../../services/dummy-swapi-service"
import ErrorBoundary from "../error-boundary"
import {SwapiServiceProvider} from "../swapi-service-context"
import RandomPlanet from "../random-planet"
import {PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage} from "../pages"
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import './app.css'
import StarshipDetails from "../sw-components/starship-details"

export default class App extends Component {

  state = {
    hasError: false,
    swapiService: new SwapiService(),
    isLoggedIn: false,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true})
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService
      return {
        swapiService: new Service()
      }
    })
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange}/>
              <RandomPlanet/>
              <Switch>
                <Route path="/"
                       render={() => <h2>Welcome to StarDB</h2>}
                       exact/>
                <Route path="/people"
                       render={() => <h2>People</h2>}/>
                <Route path="/people/:id?" component={PeoplePage}/>
                <Route path="/planets" component={PlanetsPage}/>
                <Route path="/starships" exact component={StarshipsPage}/>
                <Route path="/starships/:id"
                       render={({match, location, history}) => {
                         const {id} = match.params;
                         return <StarshipDetails itemId={id}/>
                       }}/>
                <Route path="/secret" render={() => (
                  <SecretPage isLoggedIn={isLoggedIn}/>
                )}/>
                <Route path="/login" render={() => (
                  <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>
                )}/>

                {/*<Redirect to="/"/>*/}
                <Route render={() => <h2>Page not found</h2>}/>
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    )
  }
}
