import React from "react";
import Button from "@material-ui/core/Button"
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    marginRight: '20px',    
  }
};

export class MenuComponent extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <nav>
        <Button         
          className={classes.button}        
          variant="contained"
          color="primary"
          onClick={() => {
            this.props.navigate("login");
          }}>Войти</Button>       

        <Button
          className={classes.button}  
          variant="contained"
          color="primary"
          onClick={() => {
            this.props.navigate("map");
          }}
        >
          Карта
      </Button>

        <Button
          className={classes.button}  
          variant="contained"
          color="primary"
          onClick={() => {
            this.props.navigate("profile");
          }}
        >
          Профиль
      </Button>
      </nav>
    )
  }
}

export const Menu = withStyles(styles)(MenuComponent)