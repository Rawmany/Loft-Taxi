/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withAuth } from "./AuthContext";
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import image from './background.jpg'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '280px',
    height: '330px',
    padding: '12px 92px',
    background: '#ffffff',
    position: 'absolute',
    top: '22 %',
    right: '10 %',
    boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.1)',
    // borderRadius: '20px',
  },
background: {
  backgroundImage: `url(${image})`,
    height: '100vh',
  },
};

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
    const { classes } = this.props;
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
          <div className={classes.background}>
            <p>Новый пользователь?<a onClick={this.Registr}>Зарегистрируйтесь</a></p>
            <form className={classes.form} onSubmit={this.authenticate}>
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

export const LoginWithAuth = withStyles(styles)(withAuth(Login));