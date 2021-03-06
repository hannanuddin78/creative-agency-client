import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../../App";
// import jwt_decode from "jwt-decode";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const getEmail = sessionStorage.getItem("userEmail");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || getEmail ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
