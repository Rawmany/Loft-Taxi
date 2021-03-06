import React from "react";
import Button from "@material-ui/core/Button"

export class Menu extends React.Component {

  render() {
    const styles = {
      marginRight: '20px',
    };
    return (
      <nav>
        <Button         
          style={styles}        
          variant="contained"
          color="primary"
          onClick={() => {
            this.props.navigate("login");
          }}>Войти</Button>

        <Button 
          style={styles} 
          variant="contained"
          color="primary"
          onClick={() => {
            this.props.navigate("registration");
          }}
        >
          Регистрация
      </Button>

        <Button
          style={styles} 
          variant="contained"
          color="primary"
          onClick={() => {
            this.props.navigate("map");
          }}
        >
          Карта
      </Button>

        <Button
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

