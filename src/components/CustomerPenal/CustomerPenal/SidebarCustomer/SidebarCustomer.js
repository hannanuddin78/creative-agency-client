import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCartPlus,
  faStickyNote,
  faCommentDots,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../Login/Login/firebase.config";
import { UserContext } from "../../../../App";

const SidebarCustomer = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
    history.push("/");
    sessionStorage.clear();
    window.location.reload();
  };
  return (
    <div className="sidebar">
      <ul className="list-unstyled">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/order">
            <FontAwesomeIcon icon={faCartPlus} /> <span>Order</span>
          </Link>
        </li>
        <li>
          <Link to="/orderList">
            <FontAwesomeIcon icon={faStickyNote} /> <span>Order list</span>
          </Link>
        </li>
        <li>
          <Link to="/review">
            <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
          </Link>
        </li>
      </ul>
      <div>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span style={{ cursor: "pointer" }} onClick={handLogOut}>
          Logout
        </span>
      </div>
    </div>
  );
};

export default SidebarCustomer;
