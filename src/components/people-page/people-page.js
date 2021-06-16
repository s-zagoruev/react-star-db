import React, {Component} from 'react'
import ItemList from '../item-list'
import ItemDetails from '../item-details'
import ErrorIndicator from '../error-indicator'
import SwapiService from "../../services/swapi-service"
import Row from "../row"
import ErrorBoundary from "../error-boundary"

import './people-page.css'

export default class PeoplePage extends Component {

  swapiService = new SwapiService()

  state = {
    selectedItem: null,
  }

  onItemSelected = (selectedItem) => {
    this.setState({selectedItem})
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}>
        {(i) => (
          `${i.name} (${i.gender}), ${i.birthYear}`
        )}
      </ItemList>
    )

    const itemDetails = (
      <ErrorBoundary>
        <ItemDetails itemId={this.state.selectedItem}/>
      </ErrorBoundary>
    )

    return (
      <Row left={itemList} right={itemDetails}/>
    )
  }
}
