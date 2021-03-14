import React from "react";
import { LoginWithConnect } from './Login';
import { Map } from './Map';
import { ProfileWithConnect } from './Profile';
import { Menu } from './Menu';
import { Registration } from './Registration';
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import './App.css';
import { Logo, MCIcon } from 'loft-taxi-mui-theme';

class App extends React.Component {

  render() {
    return <>
      <header>
        <Menu />
      </header>
      <main data-testid="container">
        <section>
          <Switch>
            <Route exact path="/" component={LoginWithConnect} />
            <Route exact path="/registration" component={Registration} />
            <PrivateRoute path="/map" component={Map} />
            <PrivateRoute path="/profile" component={ProfileWithConnect} />
          </Switch>
        </section>
      </main>
      <Logo />
      <MCIcon />
    </>;
  }
}



export default App;
