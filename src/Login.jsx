import React from "react";
import { withAuth } from "./AuthContext";
import { PropTypes } from 'prop-types';

export class Login extends React.Component {
  goToProfile = (event) => {
    event.preventDefault();
    this.props.navigate("profile");
  };

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  };

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
          You are logged in{" "}
          <button onClick={this.goToProfile}>
            go to profile
          </button>
        </p>
        ) : (
            <div>
              <p>Новый пользователь?<a onClick={this.Registr}>Зарегистрируйтесь</a></p>
              <form onSubmit={this.authenticate}>
                <label htmlFor="email"></label>
                <input id="email" type="email" name="email" size="28" placeholder="Имя пользователя*" />
                <label htmlFor="password"></label>
                <input id="password" type="password" name="password" size="28" placeholder="Пароль*" />
                <button type="submit">Войти</button>
              </form>
            </div>
          )}
      </>
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};

export const LoginWithAuth = withAuth(Login);