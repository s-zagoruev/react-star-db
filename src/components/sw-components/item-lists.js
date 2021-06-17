import ItemList from "../item-list/item-list"
import {compose, withChildFunction, withData, withSwapiService} from "../hoc-helpers"


const renderName = ({name}) => <span>{name}</span>
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>

const mapPersonMethodToProps = (swapiService) => ({getData: swapiService.getAllPeople})
const mapPlanetMethodToProps = (swapiService) => ({getData: swapiService.getAllPlanets})
const mapStarshipMethodToProps = (swapiService) => ({getData: swapiService.getAllStarships})

const PersonList = compose(
  withSwapiService(mapPersonMethodToProps),
  withData,
  withChildFunction(renderName)
)(ItemList)

const PlanetList = compose(
  withSwapiService(mapPlanetMethodToProps),
  withData,
  withChildFunction(renderName)
)(ItemList)

const StarshipList = compose(
  withSwapiService(mapStarshipMethodToProps),
  withData,
  withChildFunction(renderModelAndName)
)(ItemList)

export {
  PersonList,
  PlanetList,
  StarshipList,
}
