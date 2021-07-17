import {Redirect} from "react-router-dom"

const LoginPage = ({isLoggedIn, onLogin}) => {
  if (isLoggedIn) {
    return <Redirect to="/"/>
  }

  return (
    <div className="jumbotron">
      <p>Login to see Secret Page!</p>
      <button
        className="btn btn-primary"
        onClick={onLogin}>
        Login
      </button>
    </div>
  )
}

export default LoginPage
