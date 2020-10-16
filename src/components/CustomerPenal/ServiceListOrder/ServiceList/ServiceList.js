import React from "react";

const ServiceList = ({ order }) => {
  return (
    <div className="col-md-4">
      <div className="card p-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src={`data:image/png;base64,${order.image.img}`}
              className="img-fluid m-auto service-img float-left"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <button className="btn btn-primary float-right">status</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div style={{ color: "black" }} className="card-body">
              <h5 className="card-title">{order.project}</h5>
              <p className="card-text">{order.projectDetails}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
