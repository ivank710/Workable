import React from 'react';
import '../../css/_main_page.css';

class MainPage extends React.Component {

  render() {
    return (
      <>
        <div className="splash-container">
          <div className="splash-title">
            <h1>Workable</h1>
          </div>
        </div>
        <div className="splash-slogan">
          <h3>Find your job today!</h3>
        </div>

        <div className="splash-buttons">
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
        </div>

        <div className="footer">{/* <footer>Copyright</footer> */}</div>
      </>
    );  
  }
}

export default MainPage;