import React from "react";
import AdminPenalHeader from "./AdminPenalHeader/AdminPenalHeader";
import AdminServiceList from "./AdminServiceList/AdminServiceList";
import AdminSidebar from "./AdminSidebar/AdminSidebar";

const AdminPenal = () => {
  return (
    <section className="container-fluid">
      <AdminPenalHeader></AdminPenalHeader>
      <div className="row">
        <div className="col-md-2">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10">
          <AdminServiceList></AdminServiceList>
        </div>
      </div>
    </section>
  );
};

export default AdminPenal;
