import React from "react";
import { LoginWithAuth } from './Login';
import { RegistrationWithAuth } from './Registration';
import { Map } from './Map';
import { ProfileWithAuth } from './Profile';
import { withAuth } from "./AuthContext";
import { Menu } from './Menu';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  state = { currentPage: "login" }; 

  navigateTo = (page) => {    
    if (this.props.isLoggedIn || page === 'login' || page === 'registration' ) {
      this.setState({ currentPage: page }); 
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
        {this.state.currentPage === 'registration' && <RegistrationWithAuth navigate={this.navigateTo} />}
      </main>
    </>;
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};


export default withAuth(App);
