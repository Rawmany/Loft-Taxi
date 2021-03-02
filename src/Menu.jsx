/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export class Menu extends React.Component {

  render() {
    return (
      <nav>
        <ul>
          <li>
            <button
              onClick={() => {
                this.props.navigate("login");
              }}
            >
              Войти
      </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.props.navigate("registration");
              }}
            >
              Регистрация
      </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.props.navigate("map");
              }}
            >
              Карта
      </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.props.navigate("profile");
              }}
            >
              Профиль
      </button>
          </li>
        </ul>
      </nav>
    )
  }
}
