import React, {Component} from 'react'
import Header from '../header'
import SwapiService from "../../services/swapi-service"
import DummySwapiService from "../../services/dummy-swapi-service"
import ErrorBoundary from "../error-boundary"
import {SwapiServiceProvider} from "../swapi-service-context"
import RandomPlanet from "../random-planet"
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages"
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './app.css'

export default class App extends Component {

  state = {
    hasError: false,
    swapiService: new DummySwapiService(),
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true})
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
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange}/>
              <RandomPlanet/>
              <Route path="/people" component={PeoplePage}/>
              <Route path="/planets" component={PlanetsPage}/>
              <Route path="/starships" component={StarshipsPage}/>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    )
  }
}
