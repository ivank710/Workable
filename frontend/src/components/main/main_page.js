import React from 'react';
import '../../css/_main_page.css';
import '../../css/_get_started.css';
import '../../css/_header.css';
// import NavbarContainer from '../../components/nav/navbar_container';
import NavBarContainer from '../../components/nav/navbar_container'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBookmark, faUpload } from '@fortawesome/free-solid-svg-icons';

library.add(faBriefcase, faBookmark, faUpload);
class MainPage extends React.Component {

  render() {
    return (
      <>
    <div className="WelcomeHeader">
        <div className="WelcomeLogo">
          <p className="HeaderLink" > Workable </p>
        </div>
        <div className="Welcome-Sessions">
          <p onClick={() => this.props.openModal("login")} className="WelcomeLogin"> Sign in </p>
          <p onClick={() => this.props.openModal("signup")} className="WelcomeSignup"> Get started </p> 
        </div>
      </div>

{/* <NavBarContainer /> */}

<div className="home-container"> 

        <div className="splash-container">
          <div className="splash-title">
            <h1>Workable</h1>
          </div>
        </div>
        <div className="splash-slogan">
          <h3>Find your future today!</h3>
        </div>

        {/* <div className="splash-buttons">
          <button
            className="login"
            onClick={() => this.props.openModal("login")}
          >
            {" "}
            Login
          </button>
          &nbsp; &nbsp;&nbsp;
          <button
            className="signup"
            onClick={() => this.props.openModal("signup")}
          >
            {" "}
            Sign Up
          </button>
        </div> */}
         
        <div className="footer">{/* <footer>Copyright</footer> */}</div>

        </div>

      {/* Get Started Component  */}
        <div className="GetStarted">
        {/* <h1> Find your future today! </h1> */}
        {/* <p className="lowerText"> Workable is built to help you find job listings </p> */}

        <div className="GetStartedDivs">
          <div className="GSThreeDivs">
            <FontAwesomeIcon icon="upload" size="4x"/>
            <h3> Upload Your Resume </h3>
          </div>
          <div className="GSPillarLine"></div>
          <div className="GSThreeDivs">
            <FontAwesomeIcon icon="briefcase" size="4x"/>
            <h3> View Job Listings </h3>
          </div>
          <div className="GSPillarLine"></div>
          <div className="GSThreeDivs">
          <FontAwesomeIcon icon="bookmark" size="4x" color=""/>
            <h3> Manage Jobs </h3>
          </div>
        </div>
      </div>
      </>
    );  
  }
}

export default MainPage;