import React from "react";
import { Link } from "react-router-dom";

export class Menu extends React.Component {

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to='/'>Войти</Link>
          </li>
          <li>
            <Link to='/registration'>Регистрация</Link>
          </li>
          <li>
            <Link to="/map">Карта</Link>
          </li>
          <li>
            <Link to="/profile">Профиль</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
