import React from "react";
import CustomerOrderForm from "../CustomerPenal/CustomerOrderForm/CustomerOrderForm";
import CustomerPenalHeader from "../CustomerPenal/CustomerPenalHeader/CustomerPenalHeader";
import SidebarCustomer from "../CustomerPenal/SidebarCustomer/SidebarCustomer";

const OrderCustomer = () => {
  return (
    <section className="container-fluid">
      <CustomerPenalHeader></CustomerPenalHeader>
      <div className="row">
        <div className="col-md-2">
          <SidebarCustomer></SidebarCustomer>
        </div>
        <div className="col-md-10 order-right pt-5">
          <CustomerOrderForm></CustomerOrderForm>
        </div>
      </div>
    </section>
  );
};

export default OrderCustomer;
