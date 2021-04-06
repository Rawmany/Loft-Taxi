import React, {useState} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from "prop-types";
import {sendCard, getCardRequest} from '../actions/cardActions';
import {   Paper,   Grid,   Typography,   FormControl,  InputLabel,  Button,  InputBase,  Box} from '@material-ui/core';
import styles from '../css/profile.module.css';
import { Link } from "react-router-dom";


export function Profile(props) {
	const { hasCard, cardName, cardNumber, cvc, expiryDate } = props.card
	const [state, setState] = useState({cardName, cardNumber, cvc, expiryDate});

	const handleClick = event => {
		event.preventDefault();
		
		props.sendCard( {...state, token: props.token} );
	}
	const handleChange = event => {
    setState({...state, [event.target.name]: event.target.value });
  };

  
  
	return (
		<Grid container={true} alignItems="center" justify="center">
			{
				hasCard ? <Paper className={styles.formContainer}>
				<Typography variant="body1">Платежные данные обновлены. Теперь вы можете заказывать такси.</Typography>
				<Link to='map'
					className={styles.button}							
					variant="contained"
					color="primary"
					size="large"
					align='center'									>
					Перейти на карту
				</Link>
			</Paper> :
      <Grid item>
        <Paper className={styles.formContainer}>
        	 <Typography align="center" variant="h4">
        	 	Профиль
        	 </Typography>
        	 <Typography align="center" className="offsetBottom">
        	 	Способ оплаты
        	 </Typography>
        	 <form data-testid="form" onSubmit={handleClick}>
          	 	<Grid container alignItems="center" justify="center">
          	 		<Grid item xs={12}>
          	 			<Grid container spacing={4} alignItems="center" justify="center">
		          	 		<Grid item xs={6}>
		          	 			<Paper elevation={3} className={styles.card}>
			          	 			<Box className={styles.container}>
			          	 				<FormControl fullWidth>
			          	 				  <InputLabel htmlFor="my-input" shrink>Номер карты</InputLabel>
			          	 				  <InputBase 
			          	 				  	fullWidth 
			          	 				  	name="cardNumber"
			          	 				  	value={cardNumber}
			          	 				  	placeholder="0000 0000 0000 0000"
			          	 				  	required
			          	 				  	className={styles.input}
			          	 				  	onChange={handleChange}
			          	 				  />
			          	 				</FormControl>
			          	 				<FormControl fullWidth>
			          	 				  <InputLabel htmlFor="my-input" shrink>Срок действия</InputLabel>
			          	 				  <InputBase 
			          	 				  	fullWidth 
			          	 				  	name="expiryDate" 
			          	 				  	value={expiryDate}
			          	 				  	required
			          	 				  	className={styles.input}
			          	 				  	onChange={handleChange}
			          	 				  />
			          	 				</FormControl>
			          	 			</Box>
		          	 			</Paper>
			          	 	</Grid>
			          	 	<Grid item xs={6}>
		          	 			<Paper elevation={3} className={styles.card}>
			          	 			<Box className={styles.container}>
			          	 				<FormControl fullWidth>
			          	 				  <InputLabel htmlFor="my-input" shrink>Имя владельца</InputLabel>
			          	 				  <InputBase 
			          	 				  	fullWidth 
			          	 				  	name="cardName" 
			          	 				  	placeholder="USER NAME"
			          	 				  	value={cardName}
			          	 				  	required
			          	 				  	className={styles.input}
			          	 				  	onChange={handleChange}
			          	 				  />
			          	 				</FormControl>
			          	 				<FormControl fullWidth>
			          	 				  <InputLabel htmlFor="my-input" shrink>CVC</InputLabel>
			          	 				  <InputBase 
			          	 				  	fullWidth 
			          	 				  	name="cvc" 
			          	 				  	value={cvc}
			          	 				  	placeholder="CVC"
			          	 				  	required
			          	 				  	className={styles.input}
			          	 				  	onChange={handleChange}
			          	 				  />
			          	 				</FormControl>
			          	 			</Box>
		          	 			</Paper>
			          	 	</Grid>
		          	 	</Grid>
	          	 	</Grid>
          	 	</Grid>
	        	 <Grid container justify="center">
	        	 	<Button 
	        	 	  variant="contained" 
	        	 	  color="primary"
	        	 	  data-testid="submit"
	        	 	  type="submit"
	        	 	  className={styles.button}
	        	 	>
	        	 	  Сохранить
	        	 	</Button>
        	 </Grid>
        	 </form>
        </Paper>
      </Grid>
	  }
    </Grid>
	)
}

Profile.propTypes = {
	isLoggedIn: PropTypes.bool
}

export const ProfileWithAuth = connect(
	(state) => ({ card: state.card, token: state.auth.token }),
	{sendCard}
)(Profile);
