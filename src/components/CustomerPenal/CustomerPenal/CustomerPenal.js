import React from "react";
import CustomerOrderForm from "./CustomerOrderForm/CustomerOrderForm";
import CustomerPenalHeader from "./CustomerPenalHeader/CustomerPenalHeader";
import SidebarCustomer from "./SidebarCustomer/SidebarCustomer";

const CustomerPenal = () => {
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

export default CustomerPenal;
