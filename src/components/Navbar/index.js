import Header from '../Header/index'
import './index.css'

const Navbar = () => (
  <nav className="nav-container">
    <img
      src="https://res.cloudinary.com/defacaof3/image/upload/v1705817577/Delta-logos_transparent_wsbpr9.png"
      className="logo"
      alt="App logo"
    />
    <Header />
  </nav>
)

export default Navbar
