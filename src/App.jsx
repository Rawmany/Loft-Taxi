import React from "react";
import { LoginWithAuth } from './Login';
import { Registration } from './Registration';
import { Map } from './Map';
import { ProfileWithAuth } from './Profile';
import { withAuth } from "./AuthContext";
import { Menu } from './Menu';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  state = { currentPage: "login" }; //state, в котром содержится текущая станица (currentPage начальное значение)

  navigateTo = (page) => {    // метод для изменения текущей страницы
    if (this.props.isLoggedIn || page !== 'map') {
      this.setState({ currentPage: page }); //обновляем currentPage на новое значение страницы
    } else {
      this.setState({ currentPage: "login" });
    }
  };

  render() {
    return <>
      <header>
        <Menu navigate={this.navigateTo} />
      </header>
      <main data-testid="container">
        {this.state.currentPage === 'login' && <LoginWithAuth navigate={this.navigateTo} />}
        {this.state.currentPage === 'profile' && <ProfileWithAuth navigate={this.navigateTo} />}
        {this.state.currentPage === 'map' && <Map />}
        {this.state.currentPage === 'registration' && <Registration navigate={this.navigateTo} />}
      </main>
    </>;
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};


export default withAuth(App);
