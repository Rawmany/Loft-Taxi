import React, {useState, useEffect} from 'react';
import {PropTypes} from "prop-types";
import { connect } from 'react-redux'
import {Link, Redirect} from 'react-router-dom';
import { authenticate } from '../actions/authActions'
import {   Paper,   Grid,   Typography,   FormControl,  InputLabel,  Input,  Button } from '@material-ui/core';

function Form(props) {
	const [state, setState] = useState({email: "", password: ""})

  const handleSubmit = event => {
    event.preventDefault();
   
    props.authenticate(state)
    
  };

  const handleChange = event => {
    setState({...state, [event.target.name]: event.target.value });
  };

	const { email, password } = state;

  if (props.isLoggedIn) {
    return <Redirect to='map' />
  }

  return (
    <Grid container={true} alignItems="center" justify="center" className="grid">
      <Grid item xs={3}>
        <Paper className="formContainer">
    <form data-testid="form" onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className="offsetBottom" align="left" variant="h4">
            Войти
          </Typography>
          <Typography align="left">
            Новый пользователь? 
            
          <Link to="/SignUpForm">Зарегистрируйтесь</Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="email">Имя пользователя</InputLabel>
            <Input 
              id="email" 
              aria-describedby="my-helper-text" 
              name="email"
              type="email"
              data-testid="email"
              value={email}
              className="offsetBottom"
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="password">Пароль</InputLabel>
            <Input 
              id="password" 
              aria-describedby="my-helper-text" 
              name="password"
              type="password"
              data-testid="password"
              value={password}
              className="offsetBottom"
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} align="right">
          <Button 
            variant="contained" 
            color="primary"
            data-testid="submit"
            type="submit"
          >
            Войти
          </Button>
        </Grid>
      </Grid>
    </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

export const LoginForm = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  {authenticate}) (Form);



