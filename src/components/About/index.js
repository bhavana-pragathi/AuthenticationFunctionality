import Cookies from 'js-cookie'
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const About = props => {
  const logoutClick = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="body-div">
      <Header />
      <h1>About Route</h1>
      <LogoutButton logoutClick={logoutClick} />
    </div>
  )
}

export default About
