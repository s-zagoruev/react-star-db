import {StarshipList} from "../sw-components"
import {withRouter} from "react-router-dom"

const StarshipsPage = ({match, location, history}) => {
    return (
      <StarshipList
        onItemSelected={(itemId) => {
          history.push(`/starships/${itemId}`)
        }}/>
    )
}

export default withRouter(StarshipsPage)
