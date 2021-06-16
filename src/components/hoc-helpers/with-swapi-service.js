import React from "react"
import {SwapiServiceConsumer} from '../swapi-service-context'

const withSwapiService = (Wrapped) => {
  return (props) => {
    return <SwapiServiceConsumer>
      {
        (value) => <Wrapped {...props} swapiService={value}/>
      }
    </SwapiServiceConsumer>
  }
}

export default withSwapiService
