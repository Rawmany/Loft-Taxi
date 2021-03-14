import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authenticate } from './actions';


export class Login extends React.Component {

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value);
  };

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <div>
            <h1>Войти<Link to="/profile">Профиль</Link></h1>
          </div>
        ) : (
            <div>
              <h1>Войти</h1>
              <p>Новый пользователь?<Link to="/registration">Зарегистрируйтесь</Link></p>
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

export const LoginWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(Login);