/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withAuth } from "./AuthContext";
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './style'
import Button from "@material-ui/core/Button"
import Input from "@material-ui/core/Input"


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
            <div className={classes.formWrapper}>
              <form className={classes.form} onSubmit={this.authenticate}>
                <div className={classes.title}>
                <Button 
                  onClick={() => {
                  this.props.navigate("registration")}}
                  type="button"
                  variant="text"
                  color="primary"
                  >Зарегистрируйтесь</Button><p>Новый пользователь?</p>
                </div>
                <label htmlFor="email"></label>
                <Input id="email" type="email" name="email" size="28" placeholder="Имя пользователя*" />
                <label htmlFor="password"></label>
                <Input id="password" type="password" name="password" size="28" placeholder="Пароль*" />
                <Button 
                  type="submit"
                  variant="contained"
                  color="primary"
                  >Войти</Button>
              </form>
            </div>
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