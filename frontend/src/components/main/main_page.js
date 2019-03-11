import React from 'react';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Workable</h1>
        <button className='mainsignin' onClick={() => this.props.openModal('login')}>Login</button>
        <button className='mainsignin' onClick={() => this.props.openModal('signup')}>SignUp</button>
        <footer>
          Copyright
        </footer>
      </div>
    );  
  }
}

export default MainPage;