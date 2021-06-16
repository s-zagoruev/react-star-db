import ItemList from "../item-list/item-list"
import {withData} from "../hoc-helpers"
import SwapiService from "../../services/swapi-service"

const swapiService = new SwapiService()

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService

const withChildFunction = (View, fn) => {
  return (props) => {
    return (
      <View {...props}>
        {fn}
      </View>
    )
  }
}

const renderName = ({name}) => <span>{name}</span>
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>

const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople)

const PlanetList = withData(withChildFunction(
  ItemList, renderName),
  getAllPlanets)

const StarshipList = withData(withChildFunction(
  ItemList, renderModelAndName),
  getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipList,
}
