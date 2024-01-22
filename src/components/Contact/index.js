import {
  MdOutlineContactSupport,
  MdOutlineLocalPhone,
  MdChat,
  MdMailOutline,
} from 'react-icons/md'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram, FaLinkedin, FaFacebookSquare} from 'react-icons/fa'
import Navbar from '../Navbar/index'
import './index.css'

const Contact = () => (
  <>
    <Navbar />
    <div className="contact-container">
      <center>
        <MdOutlineContactSupport className="help-icon" />
      </center>
      <hr />
      <h1 className="contact-main-head">CONTACT DELTA VENTURES</h1>
      <p className="contact-main-para">
        Questions? Contact us through any of these sources
      </p>
      <div className="contact-list">
        <div className="contact-item">
          <MdChat className="contact-icon" />
          <div>
            <h1 className="contact-head">Chat With Us</h1>
            <p className="contact-para">
              Typical Reply Within Seconds from Mon-Fri 10AM to 9PM
            </p>
          </div>
          <button type="button" className="contact-button">
            CHAT WITH US
          </button>
        </div>
        <div className="contact-item">
          <MdMailOutline className="contact-icon" />
          <div>
            <h1 className="contact-head">Email Us</h1>
            <p className="contact-para">
              Typical Reply Withing 30 mins. Available 24/7
            </p>
          </div>
          <button type="button" className="contact-button">
            EMAIL US
          </button>
        </div>
        <div className="contact-item">
          <MdOutlineLocalPhone className="contact-icon" />
          <div>
            <h1 className="contact-head">Call Us</h1>
            <p className="contact-para">Immediate reply by our service team</p>
          </div>
          <button type="button" className="contact-button">
            CALL US
          </button>
        </div>
      </div>
    </div>
    <div className="connect-us-container">
      <h1 className="connect-with-us">Connect With Us</h1>
      <div className="app-logos">
        <FaInstagram className="appLogo" />
        <FaLinkedin className="appLogo" />
        <FaSquareXTwitter className="appLogo" />
        <FaFacebookSquare className="appLogo" />
      </div>
    </div>
  </>
)

export default Contact
