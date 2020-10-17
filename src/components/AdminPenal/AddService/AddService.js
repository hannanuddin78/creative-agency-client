import React from "react";
import AdminPenalHeader from "../AdminPenal/AdminPenalHeader/AdminPenalHeader";
import AdminSidebar from "../AdminPenal/AdminSidebar/AdminSidebar";
import AddServiceForm from "./AddServiceForm/AddServiceForm";

const AddService = () => {
  return (
    <section className="container-fluid">
      <AdminPenalHeader></AdminPenalHeader>
      <div className="row">
        <div className="col-md-2">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10 order-right p-5">
          <AddServiceForm></AddServiceForm>
        </div>
      </div>
    </section>
  );
};

export default AddService;
