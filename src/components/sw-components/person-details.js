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

export default PersonDetails
