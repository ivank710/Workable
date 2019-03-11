import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/_navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    // this.logoutUser = this.logoutUser.bind(this);
    // this.getLinks = this.getLinks.bind(this);
  }

  // logoutUser(e) {
  //   e.preventDefault();
  //   this.props.logout();
  // }

  //selectively render links dependent on whether the user is logged in
  // getLinks() {
  //   if (this.props.loggedIn) {
  //     return (
  //       <div>
  //         <Link to={'/tweets'}>All Tweets</Link>
  //         <Link to={'/profile'}>Profile</Link>
  //         <Link to={'/new_tweet'}>Write a Tweet</Link>
  //         <button onClick={this.logoutUser}>Logout</button>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <Link to={'/signup'}>Signup</Link>
  //         <Link to={'/login'}>Login</Link>
  //       </div>
  //     );
  //   }
  // }

  render() {
    return (
      <div className='navbar'>
        <div className='navbarsub'>
          <Link to='/explore'><div>Home</div></Link>
          <div className='maintitle'>Workable</div>
          <div className='navright'>
            <Link to='/user'><div className='profilelink'>My Profile</div></Link>
            <button onClick={this.props.logout} >Logout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
