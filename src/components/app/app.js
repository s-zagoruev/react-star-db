import React, {Component} from 'react'
import Header from '../header'
import ErrorIndicator from "../error-indicator"
import SwapiService from "../../services/swapi-service"
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

export default class App extends Component {

  swapiService = new SwapiService()

  state = {
    showRandomPlanet: true,
    hasError: false,
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

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header/>

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
