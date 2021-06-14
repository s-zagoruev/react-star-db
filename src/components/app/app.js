import React, {Component} from 'react'
import Header from '../header'
/*import RandomPlanet from '../random-planet'*/
import ErrorIndicator from "../error-indicator"
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ItemDetails, {Record} from "../item-details";
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

    /*const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet/> : null*/

    const {getPerson, getStarship} = this.swapiService
    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={this.swapiService.getPersonImage}>
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye color"/>
      </ItemDetails>
    )
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={this.swapiService.getStarshipImage}>
        <Record field="model" label="Model"/>
        <Record field="length" label="Length"/>
        <Record field="costInCredits" label="Cost"/>
      </ItemDetails>
    )

    return (
      <div className="app">
        <Header/>
        {/*{randomPlanet}
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>*/}

        <Row left={personDetails} right={starshipDetails}/>

      </div>
    )
  }
}
