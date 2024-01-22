import {Component} from 'react'
import {FaArrowRight, FaSquareXTwitter, FaArrowDown} from 'react-icons/fa6'
import {FaInstagram, FaLinkedin, FaFacebookSquare} from 'react-icons/fa'
import Navbar from '../Navbar/index'
import './index.css'

class Home extends Component {
  state = {
    isClicked: true,
  }

  onClickService = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {isClicked} = this.state
    return (
      <>
        <Navbar />
        <div className="bg-container">
          <h1 className="home-head">
            Elevate Your Living Experience: <br />
            Unveiling Our Exclusive <br /> Real Estate Collection
          </h1>
          <button type="button" className="get-started-button">
            Get Started
          </button>
        </div>
        {isClicked ? (
          <div className="head-icon">
            <h1 className="our-services-head">Our Services </h1>
            <FaArrowRight
              type="button"
              className="icon"
              onClick={this.onClickService}
            />
          </div>
        ) : (
          <>
            <div className="head-icon">
              <h1 className="our-services-head">Our Services </h1>
              <FaArrowDown
                type="button"
                className="icon"
                onClick={this.onClickService}
              />
            </div>
            <ul className="service-list">
              <li className="service-item">
                <img
                  src="https://templatic.com/wp/wp-content/uploads/2020/12/property-features-real-estate-listings.jpg"
                  className="service-image"
                  alt="Service"
                />
                <p className="service-para">Property Listings and Marketing</p>
              </li>
              <li className="service-item">
                <img
                  src="https://assets-news.housing.com/news/wp-content/uploads/2020/01/10101129/How-to-arrive-at-the-fair-market-value-of-a-property-and-its-importance-in-income-tax-laws-FB-1200x700-compressed.jpg"
                  className="service-image"
                  alt="Service"
                />
                <p className="service-para">Property Valuation and Appraisal</p>
              </li>
              <li className="service-item">
                <img
                  src="https://www.investopedia.com/thmb/SGpM4XxEUtFKwZTvIxrQbdLRobs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-i-can-use-real-estate-to-benefit-my-taxes-7e491a12d2df4964ab830e5afbb6b545.jpg"
                  className="service-image"
                  alt="Service"
                />
                <p className="service-para">
                  Real Estate Consulting and Advisory
                </p>
              </li>
              <li className="service-item">
                <img
                  src="https://vectorstate.com/stock-photo-preview/103278624/350/ist_7696_03326.jpg"
                  className="service-image"
                  alt="Service"
                />
                <p className="service-para">
                  Transaction Facilitation and Negotiation
                </p>
              </li>
            </ul>
          </>
        )}
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
  }
}

export default Home
