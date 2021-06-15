import React, {Component} from 'react'
import Header from '../header'
import ErrorIndicator from "../error-indicator"
import SwapiService from "../../services/swapi-service"
import './app.css'
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from "../sw-components"

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
      <div className="app">
        <Header/>

        <PersonDetails itemId={5}/>
        <PlanetDetails itemId={3}/>
        <StarshipDetails itemId={5}/>

       <PersonList>
         {({name}) => <span>{name}</span>}
       </PersonList>

       <PlanetList>
         {({name}) => <span>{name}</span>}
       </PlanetList>

       <StarshipList>
         {({name}) => <span>{name}</span>}
       </StarshipList>

      </div>
    )
  }
}
