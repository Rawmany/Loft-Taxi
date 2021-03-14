import React from "react";
import { Link } from "react-router-dom";

export class Registration extends React.Component {

  render() {
    return (
      <form>
        <div>
          <div>
            <h1>Регистрация</h1>
            <p>Уже зарегистрирован?<Link to="/profile">Войти</Link></p>
          </div>
          <label htmlFor="email">Адрес электронной почты</label>
          <input id="email" type="email" name="email" size="28" />

          <label htmlFor="name">Имя</label>
          <input id="name" type="text" name="name" size="28" />

          <label htmlFor="name">Фамилия</label>
          <input id="surname" type="text" name="surname" size="28" />

          <label htmlFor="password"></label>
          <input id="password" type="password" name="password" size="28" placeholder="Пароль*" />

          <input type="submit" value="Зарегистрироваться" />
        </div>
      </form>
    );
  }
};

export default Registration;