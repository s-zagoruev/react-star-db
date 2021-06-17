import ItemList from "../item-list/item-list"
import {withData, withSwapiService} from "../hoc-helpers"

const withChildFunction = (fn) => (View) => {
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

const mapPersonMethodToProps = (swapiService) => ({getData: swapiService.getAllPeople})
const mapPlanetMethodToProps = (swapiService) => ({getData: swapiService.getAllPlanets})
const mapStarshipMethodToProps = (swapiService) => ({getData: swapiService.getAllStarships})

const PersonList = withSwapiService(mapPersonMethodToProps)(
                     withData(
                       withChildFunction(renderName)(
                         ItemList)))

const PlanetList = withSwapiService(mapPlanetMethodToProps)(
                     withData(
                       withChildFunction(renderName)(
                         ItemList)))

const StarshipList = withSwapiService(mapStarshipMethodToProps)(
                       withData(
                         withChildFunction(renderModelAndName)(
                           ItemList)))

export {
  PersonList,
  PlanetList,
  StarshipList,
}
