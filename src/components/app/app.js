import React, {Component} from 'react'
import Header from '../header'
import SwapiService from "../../services/swapi-service"
import DummySwapiService from "../../services/dummy-swapi-service"
import ErrorBoundary from "../error-boundary"
import {SwapiServiceProvider} from "../swapi-service-context"
import RandomPlanet from "../random-planet"
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages"
import './app.css'

export default class App extends Component {

  state = {
    hasError: false,
    swapiService: new SwapiService(),
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
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange}/>
            <RandomPlanet/>
            <PeoplePage/>
            <PlanetsPage/>
            <StarshipsPage/>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    )
  }
}
