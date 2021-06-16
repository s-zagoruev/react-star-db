import ItemDetails, {Record} from "../item-details"
import {withSwapiService} from "../hoc-helpers"

const PlanetDetails = ({itemId, swapiService}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={swapiService.getPlanet}
      getImageUrl={swapiService.getPlanetImage}>
      <Record field="population" label="Population"/>
      <Record field="rotationPeriod" label="Rotation Period"/>
      <Record field="diameter" label="diameter"/>
    </ItemDetails>
  )
}

export default withSwapiService(PlanetDetails)
