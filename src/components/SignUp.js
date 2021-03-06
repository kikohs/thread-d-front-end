import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";
import "../css/signup.css";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class SignUp extends React.Component {
  //handle state for the forms
  state = {
    signup: { name: "", email: "", password: "", passwordConfirm: "" },
    login: { email: "", password: "" }
  };

  handleChange = (e, topKey, key) => {
    let value = e.target.value;
    this.setState(prevState => {
      return {
        [topKey]: { ...prevState[topKey], [key]: value }
      };
    });
  };

  handleSignUpSubmit = e => {
    e.preventDefault();
    this.props.createUser(this.state.signup, this.props.history);
    this.setState({
      signup: { name: "", email: "", password: "", passwordConfirm: "" },
      login: { email: "", password: "" }
    });
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state.login, this.props.history);
    this.setState({
      signup: { name: "", email: "", password: "", passwordConfirm: "" },
      login: { email: "", password: "" }
    });
  };

  render() {
    return (
      <div>
        {this.props.user.error ? (
          <div id="error-message">{this.props.user.error.join(", ")}</div>
        ) : null}
        <h1 id="login-signup-title">thread'd</h1>
        <div id="login-signup-container">
          <ReactCSSTransitionGroup
            component="div"
            id="signup-container"
            style={{ height: window.innerHeight * 0.6 }}
            transitionName="signup"
            transitionAppear={true}
            transitionAppearTimeout={800}
            transitionEnter={false}
            transitionLeave={false}
          >
            <h3>sign up</h3>
            <form className="topBefore" onSubmit={this.handleSignUpSubmit}>
              <input
                id="signup-name"
                type="text"
                placeholder="NAME"
                value={this.state.signup.name}
                autoComplete="off"
                onChange={e => {
                  this.handleChange(e, "signup", "name");
                }}
              />
              <input
                id="signup-email"
                type="text"
                placeholder="E-MAIL"
                autoComplete="off"
                value={this.state.signup.email}
                onChange={e => {
                  this.handleChange(e, "signup", "email");
                }}
              />
              <input
                id="signup-password"
                type="password"
                placeholder="PASSWORD"
                autoComplete="off"
                value={this.state.signup.password}
                onChange={e => {
                  this.handleChange(e, "signup", "password");
                }}
              />
              <input
                id="signup-password-confirm"
                type="password"
                placeholder="CONFIRM PASSWORD"
                autoComplete="off"
                value={this.state.signup.passwordConfirm}
                onChange={e => {
                  this.handleChange(e, "signup", "passwordConfirm");
                }}
              />
              <input
                id="signup-submit"
                style={
                  this.state.signup.password ===
                  this.state.signup.passwordConfirm
                    ? { height: "50px" }
                    : { height: "0px" }
                }
                type="submit"
                value="SIGN UP"
              />
            </form>
          </ReactCSSTransitionGroup>

          <ReactCSSTransitionGroup
            component="div"
            id="login-container"
            style={{ height: window.innerHeight * 0.6 }}
            transitionName="login"
            transitionAppear={true}
            transitionAppearTimeout={1200}
            transitionEnter={false}
            transitionLeave={false}
          >
            <h3>log in</h3>
            <form className="topBefore" onSubmit={this.handleLoginSubmit}>
              <input
                id="login-email"
                type="text"
                placeholder="E-MAIL"
                value={this.state.login.email}
                autoComplete="off"
                onChange={e => {
                  this.handleChange(e, "login", "email");
                }}
              />
              <input
                id="login-password"
                type="password"
                placeholder="PASSWORD"
                autoComplete="off"
                value={this.state.login.password}
                onChange={e => {
                  this.handleChange(e, "login", "password");
                }}
              />
              <input id="login-submit" type="submit" value="LOG IN" />
            </form>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  user: state.user
});

export default withRouter(connect(mapStateToProps, actions)(SignUp));
