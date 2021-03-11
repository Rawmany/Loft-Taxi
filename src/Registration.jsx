import React from "react";
import { withAuth } from "./AuthContext";
import { PropTypes } from 'prop-types';

export class Registration extends React.Component {

  onClick = event => {
    event.preventDefault();
    this.props.navigate('profile');
  }

  authenticate = (event) => {
    event.preventDefault();
    const { email, firstName, lastName, password } = event.target;
    this.props.Registr(email.value, firstName.value, lastName.value, password.value);
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
          <form>
            <div>
              <div>
                <h1>Регистрация</h1>
                <p>Уже зарегистрирован?<a>Войти</a></p>
              </div>
              <label htmlFor="email">Адрес электронной почты</label>
              <input id="email" type="email" name="email" size="28" />

              <label htmlFor="firstName">Имя</label>
              <input id="firstName" type="text" name="firstName" size="28" />

              <label htmlFor="lastName">Фамилия</label>
              <input id="lastName" type="text" name="lastName" size="28" />

              <label htmlFor="password"></label>
              <input id="password" type="password" name="password" size="28" placeholder="Пароль*" />

              <button type="submit" value="Registration" >Зарегистрироваться</button>
            </div>
          </form>
        )}
      </>
    );
  }
};

Registration.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};

export const RegistrationWithAuth = withAuth(Registration)