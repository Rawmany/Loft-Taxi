/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Login } from './Login';
import { Registration } from './Registration';
import { Map } from './Map';
import { Profile } from './Profile';
import './App.css';

class App extends React.Component {
  state = { currentPage: "home" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return <>
      <header>
        <nav>
          <ul>
            <li>
              <a
                onClick={() => {
                  this.navigateTo("login");
                }}
              >
                Войти
                </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.navigateTo("registration");
                }}
              >
                Регистрация
                </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.navigateTo("map");
                }}
              >
                Карта
                </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.navigateTo("profile");
                }}
              >
                Профиль
                </a>
            </li>
          </ul>
        </nav>
      </header>
      <main data-testid="container">
      {this.state.currentPage === 'login' && <Login navigate={this.navigateTo} />}
        {this.state.currentPage === 'profile' && <Profile />}
        {this.state.currentPage === 'map' && <Map />}
        {this.state.currentPage === 'registration' && <Registration navigate={this.navigateTo} />}
      </main>
    </>;
  }
}

export default App;
