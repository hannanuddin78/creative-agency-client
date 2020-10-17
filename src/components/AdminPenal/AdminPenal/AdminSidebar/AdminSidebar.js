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
import { UserContext } from "../../../../App";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../Login/Login/firebase.config";

const AdminSidebar = () => {
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
          <Link to="/serviceList">
            <FontAwesomeIcon icon={faCartPlus} />{" "}
            <span value="Service list">Service list</span>
          </Link>
        </li>
        <li>
          <Link to="/addService">
            <FontAwesomeIcon icon={faStickyNote} />{" "}
            <span value="Service list">Add Service</span>
          </Link>
        </li>
        <li>
          <Link to="/addAdmin">
            <FontAwesomeIcon icon={faCommentDots} />{" "}
            <span value="Service list">Make Admin</span>
          </Link>
        </li>
        <li>
          <Link to="/customerPenal">
            <FontAwesomeIcon icon={faCommentDots} />{" "}
            <span value="Service list">Customer Penal</span>
          </Link>
        </li>
      </ul>
      <div>
        <FontAwesomeIcon icon={faSignOutAlt} />{" "}
        <span style={{ cursor: "pointer" }} onClick={handLogOut}>
          Logout
        </span>
      </div>
    </div>
  );
};

export default AdminSidebar;
