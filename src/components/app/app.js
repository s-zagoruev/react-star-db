import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'

import './app.css'
import ErrorButton from "../error-button"
import ErrorIndicator from "../error-indicator"
import PeoplePage from "../people-page"

export default class App extends Component {

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

    const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet/> : null

    return (
      <div className="app">
        <Header/>
        {randomPlanet}
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <ErrorButton/>
        <PeoplePage/>
        <PeoplePage/>
        <PeoplePage/>
      </div>
    )
  }
}
