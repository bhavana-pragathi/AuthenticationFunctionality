import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <div>
      <ul className="list-items">
        <li className="list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
