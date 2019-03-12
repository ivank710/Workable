import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/explore');
    }

    this.setState({errors: nextProps.errors})
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
      password: this.state.password
    };

    this.props.login(user)
   
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
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
          <h1 id="session">Login</h1>
        </div>
        <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
              <input type='text'
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
              className="session-input"
              />
            
              <input type='password'
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
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
      </div>
    );
  }
}

export default withRouter(LoginForm);