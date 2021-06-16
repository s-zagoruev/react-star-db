import ItemDetails, {Record} from "../item-details"
import {SwapiServiceConsumer} from "../swapi-service-context"

const PersonDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getPerson, getPersonImage}) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={getPerson}
              getImageUrl={getPersonImage}>
              <Record field="gender" label="Gender"/>
              <Record field="eyeColor" label="Eye color"/>
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  )
}

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

const StarshipDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getStarship, getStarshipImage}) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={getStarship}
              getImageUrl={getStarshipImage}>
              <Record field="model" label="Model"/>
              <Record field="length" label="Length"/>
              <Record field="costInCredits" label="Cost"/>
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  )
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
}
