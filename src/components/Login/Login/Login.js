import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../App";
import AgencyLogo from "../../AgencyLogo/AgencyLogo";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleLogIn = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(function (result) {
        const { displayName, email, photoURL } = result.user;
        const signInUser = { name: displayName, email: email, img: photoURL };
        setLoggedInUser(signInUser);
        storeAuthToken();
        sessionStorage.setItem("userEmail", signInUser.email);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <section className="container d-flex align-items-center mt-5">
      <div className="row m-auto pt-5">
        <div className="col-md-12  mb-5 text-center">
          <AgencyLogo></AgencyLogo>
        </div>
        <div className="col-md-12 card text-center p-5 ">
          <h3>Login With</h3>
          <div onClick={handleGoogleLogIn} className="google-btn">
            <span>Continue with Google</span>
          </div>
          <p onClick={handleGoogleLogIn}>
            Don’t have an account?
            <span style={{ color: "#3F90FC" }}>Create an account</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
