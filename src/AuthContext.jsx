import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const logIn = (email, password) => {
    if (email === "valid@email.com" && password === "1111") {
      setIsLoggedIn(true);
    }
    return;
  };

  const Registr = (email,firstName, lastName, password) => {
    if (email === "valid@email.com" && firstName === "Roman" && lastName === "Yak" && password === "1111") {
      setIsLoggedIn(true);
    }
    return;
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ logIn, Registr, logOut, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <AuthContext.Consumer>
          {(value) => {
            return <WrappedComponent {...value} {...this.props} />;
          }}
        </AuthContext.Consumer>
      );
    }
  };
};