import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../../../App";
import AgencyLogo from "../../../../../AgencyLogo/AgencyLogo";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../../../Login/Login/firebase.config";

const HeaderNavbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setLoggedInUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handLogOut = () => {
    logOut();
    sessionStorage.clear();
    window.location.reload();
  };
  return (
    <div className="container pt-5 mb-4 ">
      <div className="row">
        <div className="col-md-2 col-sm-4">
          <AgencyLogo></AgencyLogo>
        </div>
        <div className="col-md-10 col-sm-8">
          <nav className="navbar navbar-expand-lg navbar-light float-right">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main-menu"
              aria-controls="main-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main-menu">
              <ul className="navbar-nav">
                <li className="nav-item active  pr-5">
                  <Link to="/" className="link-a">
                    <a className="nav-link">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item  pr-5">
                  <Link to="/portfolio" className="link-a">
                    <a className="nav-link">Our Portfolio</a>
                  </Link>
                </li>
                <li className="nav-item  pr-5">
                  <Link to="/dashboard" className="link-a">
                    <a className="nav-link">Our Team</a>
                  </Link>
                </li>
                <li className="nav-item  pr-5">
                  <Link to="/Contact" className="link-a">
                    <a className="nav-link">Contact Us</a>
                  </Link>
                </li>
                {loggedInUser.email ? (
                  <li className="nav-item " className="link-a">
                    <a className="nav-link font-weight-bold">
                      {loggedInUser.name}
                    </a>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="link-a">
                      <button type="button" className="btn btn-dark dark-btn">
                        Login
                      </button>
                    </Link>
                  </li>
                )}

                <li className="nav-item">
                  {loggedInUser.email && (
                    <button
                      onClick={handLogOut}
                      type="button"
                      className="btn btn-dark dark-btn ml-5"
                    >
                      Logout
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbar;
{
  /* ; */
}
