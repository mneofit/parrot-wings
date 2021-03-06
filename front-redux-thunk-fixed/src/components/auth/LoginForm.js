import React from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import "./AuthForm.scss";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => (prevState[name] = value));
  };

  handleLogin = e => {
    const { email, password } = this.state;
    this.props.handleLogin(email, password);
    e.preventDefault();
  };

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="login-form">
        <div className="main-div">
          <div className="panel">
            <h2>User login</h2>
          </div>
          <form id="Login" onSubmit={this.handleLogin}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                placeholder="Email Address"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          <div className="panel">
            Not registered? Create an account <Link to="/register">here</Link>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  loggedIn: PropTypes.bool,
  handleLogin: PropTypes.func.isRequired
};

export default LoginForm;
