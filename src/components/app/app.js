import React, {Component} from 'react'
import Header from '../header'
import ErrorIndicator from "../error-indicator"
import SwapiService from "../../services/swapi-service"
import DummySwapiService from "../../services/dummy-swapi-service"
import ErrorBoundary from "../error-boundary"
import {SwapiServiceProvider} from "../swapi-service-context"
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from "../sw-components"
import './app.css'
import RandomPlanet from "../random-planet"

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService: new DummySwapiService(),
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
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

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange}/>

            <RandomPlanet/>

            <PersonDetails itemId={5}/>

            <PlanetDetails itemId={3}/>

            <StarshipDetails itemId={5}/>

            <PersonList/>

            <PlanetList/>

            <StarshipList/>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    )
  }
}
