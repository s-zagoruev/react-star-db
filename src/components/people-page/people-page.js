import React, {Component} from 'react'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'
import ErrorIndicator from '../error-indicator/error-indicator'
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundary from "../error-boundary";

import './people-page.css'

export default class PeoplePage extends Component {

  swapiService = new SwapiService()

  state = {
    selectedPerson: null,
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({selectedPerson})
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const itemList = (
      <ItemList
        onPersonSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>
        {(i) => (
          `${i.name} (${i.gender}), ${i.birthYear}`
        )}
      </ItemList>
    )

    const personDetails = (
      <ErrorBoundary>
        <PersonDetails personId={this.state.selectedPerson}/>
      </ErrorBoundary>
    )

    return (
      <Row left={itemList} right={personDetails}/>
    )
  }
}
