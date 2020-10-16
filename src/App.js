import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import CustomerPenal from "./components/CustomerPenal/CustomerPenal/CustomerPenal";
import OrderCustomer from "./components/CustomerPenal/OrderCustomer/OrderCustomer";
import ServiceListOrder from "./components/CustomerPenal/ServiceListOrder/ServiceListOrder";
import OrderReview from "./components/CustomerPenal/OrderReview/OrderReview";
import AdminPenal from "./components/AdminPenal/AdminPenal/AdminPenal";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import AddService from "./components/AdminPenal/AddService/AddService";
import Dashboard from "./components/Dashboard/Dashboard";
import AddAdmin from "./components/AdminPenal/AddAdmin/AddAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/customerPenal">
            <CustomerPenal></CustomerPenal>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <OrderCustomer></OrderCustomer>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <ServiceListOrder></ServiceListOrder>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <OrderReview></OrderReview>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/serviceList">
            <AdminPenal></AdminPenal>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
