import Cookies from 'js-cookie'
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = props => {
  const logoutClick = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="body-div">
      <Header />
      <h1>Home Route</h1>
      <LogoutButton logoutClick={logoutClick} />
    </div>
  )
}

export default Home
