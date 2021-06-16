import ItemList from "../item-list/item-list"
import {withData, withSwapiService} from "../hoc-helpers"

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

const mapPersonMethodToProps = (swapiService) => ({getData: swapiService.getAllPeople})
const mapPlanetMethodToProps = (swapiService) => ({getData: swapiService.getAllPlanets})
const mapStarshipMethodToProps = (swapiService) => ({getData: swapiService.getAllStarships})

const PersonList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPersonMethodToProps
)

const PlanetList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPlanetMethodToProps
)

const StarshipList = withSwapiService(
  withData(withChildFunction(ItemList, renderModelAndName)),
  mapStarshipMethodToProps
)

export {
  PersonList,
  PlanetList,
  StarshipList,
}
