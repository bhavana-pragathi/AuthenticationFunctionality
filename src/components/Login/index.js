import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'
import './index.css'

class Login extends Component {
  onSubmit = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.push('/')
  }

  onLogin = async () => {
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmit(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="body-div">
        <h1>Please Login</h1>
        <button type="button" onClick={this.onLogin}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
