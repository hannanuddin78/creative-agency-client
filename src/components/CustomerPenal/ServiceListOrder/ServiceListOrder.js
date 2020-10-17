import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import CustomerPenalHeader from "../CustomerPenal/CustomerPenalHeader/CustomerPenalHeader";
import SidebarCustomer from "../CustomerPenal/SidebarCustomer/SidebarCustomer";
import ServiceList from "./ServiceList/ServiceList";
import loader from "../../../images/loder/200.gif";

const ServiceListOrder = () => {
  const [order, setOrder] = useState([]);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch(
      "https://gentle-escarpment-52580.herokuapp.com/seeOrder?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrder(data);
      });
  }, []);
  return (
    <section className="container-fluid">
      <CustomerPenalHeader></CustomerPenalHeader>
      <div className="row">
        <div className="col-md-2">
          <SidebarCustomer></SidebarCustomer>
        </div>
        <div className="col-md-10 order-right pt-5">
          <div className="row">
            {order.map((order) => (
              <ServiceList key={order._id} order={order}></ServiceList>
            ))}
            {order.length < 1 && (
              <img
                src={loader}
                style={{ width: "300px", margin: "auto" }}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceListOrder;
