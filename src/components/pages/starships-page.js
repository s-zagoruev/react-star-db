import {StarshipList} from "../sw-components"
import {withRouter} from "react-router-dom"

const StarshipsPage = ({match, location, history}) => {
    return (
      <StarshipList
        onItemSelected={(id) => history.push(id)}/>
    )
}

export default withRouter(StarshipsPage)
