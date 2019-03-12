import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
    this.props.history.push('/explore')
      
    }

    this.setState({errors: nextProps.errors});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user).then(() => this.props.closeModal())
  }


  renderErrors() {
    return (
      <ul >
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="error-rendering" key={`error-${i}`} >
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div className="modal-header">
          <h1 id="session">Sign Up</h1>
        </div>
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">

              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className="session-input"
              />
         
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="session-input"
              />
           
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
                className="session-input"
              />
              </div>
            <div className="submit-modal-container">
              <input className="submit-modal" type="submit" value="Submit" />
            </div>
            <div className="error-rendering">
              {this.renderErrors()}
            </div>
        </form>
      </div>
      <div>
       
        </div>
      </div>
    );
  
  }
}

export default withRouter(SignupForm);