import React, {Component} from 'react'
import Header from '../header'
import ErrorIndicator from "../error-indicator"
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ItemDetails, {Record} from "../item-details";
import './app.css'
import ItemList from "../item-list";

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

    const {getPerson, getStarship, getAllPeople, getAllPlanets} = this.swapiService

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

        {/*<Row left={personDetails} right={starshipDetails}/>*/}

        <ItemList getData={getAllPeople} onItemSelected={() => { alert('Selected') }}>
          {({name}) => <span>{name}</span>}
        </ItemList>

      </div>
    )
  }
}
