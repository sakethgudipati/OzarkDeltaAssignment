import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram, FaLinkedin, FaFacebookSquare} from 'react-icons/fa'
import Navbar from '../Navbar/index'
import './index.css'

const About = () => (
  <>
    <Navbar />
    <div className="about-us-container">
      <h1 className="about-head">
        Welcome to Delta Ventures, where your journey to exceptional real estate
        experiences begins. At Delta Ventures, we believe that every property
        holds the potential to be a gateway to new opportunities, and we are
        here to guide you through every step of your real estate adventure. As
        the team behind Delta Ventures, we are committed to redefining the way
        you experience real estate. <br /> <br /> Our mission is to not only
        provide properties but to create spaces that align with your dreams and
        aspirations. Whether you're searching for your dream home, exploring
        investment opportunities, or seeking expert advice, Delta Ventures is
        your trusted partner. Take a moment to delve into our 'About Us' page to
        meet the faces behind Delta Ventures, understand our core values, and
        discover the principles that drive us. Our dedication to excellence,
        innovation, and community is what sets Delta Ventures apart in the real
        estate landscape. Thank you for considering Delta Ventures as your real
        estate companion. We look forward to being part of your journey in
        finding not just a house but a home that resonates with your unique
        story. <br />
        <br />
        <br />
        Welcome aboard, The Delta Ventures Team
      </h1>
    </div>
    <div className="founder-container">
      <div className="profile-container">
        <img
          src="https://c.pxhere.com/photos/08/7a/male_portrait_profile_social_media_cv_young_elegant_suit-459413.jpg!d"
          className="profile"
          alt="Profile"
        />
        <h1 className="bio">Joe, CEO of Delta Ventures</h1>
        <p className="quotation">
          "Delta Ventures: Your journey to a dream home begins here."
        </p>
      </div>
      <div className="profile-container">
        <img
          src="https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww"
          className="profile"
          alt="Profile"
        />
        <h1 className="bio">Andrew, Co-founder of Delta Ventures</h1>
        <p className="quotation">
          "At Delta Ventures, we turn properties into possibilities."
        </p>
      </div>
      <div className="profile-container">
        <img
          src="https://www.realmenrealstyle.com/wp-content/uploads/2023/08/5-Simple-Tips-To-Raise-Your-Status-As-A-Man.jpg"
          className="profile"
          alt="Profile"
        />
        <h1 className="bio">Quiron Johnson, Head of Customer Engagement</h1>
        <p className="quotation">
          "Welcome to Delta Ventures, where homes are more than addresses;
          they're stories waiting to be written."
        </p>
      </div>
    </div>
    <h1 className="values">Core Values</h1>
    <div className="values-container">
      <div className="value-item">
        <img
          src="https://knowledge.wharton.upenn.edu/wp-content/uploads/2023/03/3.15.23-scott-snyder-esg-corporate-innovation-GettyImages-1410816388.png"
          className="value-image"
          alt="values"
        />
        <div>
          <h1 className="value-head">Innovation</h1>
          <p className="value-para">
            At Delta Ventures, we embrace innovation as the key to unlocking new
            possibilities in the real estate landscape. We continuously seek
            creative solutions, adopt cutting-edge technologies, and explore
            novel approaches to enhance the real estate experience for our
            clients.
          </p>
        </div>
      </div>
      <div className="value-item">
        <img
          src="https://community.thriveglobal.com/wp-content/uploads/2017/09/integrity_compass.jpg"
          className="value-image"
          alt="values"
        />
        <div>
          <h1 className="value-head">Integrity</h1>
          <p className="value-para">
            Integrity is the cornerstone of our business. We prioritize
            transparency, honesty, and ethical conduct in all our interactions.
            Delta Ventures is committed to building trust with our clients,
            partners, and the communities we serve, ensuring a foundation of
            integrity in every aspect of our operations.
          </p>
        </div>
      </div>
      <div className="value-item">
        <img
          src="https://www.barnetconservatives.co.uk/sites/www.barnetconservatives.co.uk/files/styles/gallery_large/public/community_focus.jpg?itok=X4AJGISc"
          className="value-image"
          alt="values"
        />
        <div>
          <h1 className="value-head">Community Focus</h1>
          <p className="value-para">
            Delta Ventures is more than a real estate company; we are deeply
            rooted in the communities we serve. Our commitment to community
            focus goes beyond transactions. We actively contribute to the
            well-being of the neighborhoods we operate in, fostering a sense of
            belonging and positive impact.
          </p>
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

export default About
