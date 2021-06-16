import ItemList from "../item-list/item-list"
import {withData} from '../hoc-helpers'
import SwapiService from "../../services/swapi-service"

const swapiService = new SwapiService()
const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService

const PersonList = withData(ItemList, getAllPeople)
const PlanetList = withData(ItemList, getAllPlanets)
const StarshipList = withData(ItemList, getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipList,
}