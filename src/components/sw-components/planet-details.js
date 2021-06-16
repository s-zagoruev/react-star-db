import ItemDetails, {Record} from "../item-details"
import {SwapiServiceConsumer} from "../swapi-service-context"

const PlanetDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        (swapiService) => {
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
      }
    </SwapiServiceConsumer>
  )
}

export default PlanetDetails
