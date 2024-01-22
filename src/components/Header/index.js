import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="header-list">
    <Link className="header-item" to="/">
      <li>Home</li>
    </Link>
    <Link className="header-item" to="/about">
      <li>About</li>
    </Link>
    <Link className="header-item" to="/contact">
      <li>Contact</li>
    </Link>
  </ul>
)

export default Header
