import React from "react";
import { Link } from "react-router-dom";

const Services = ({ service }) => {
  return (
    <div className="col-md-4">
      <Link to="/dashboard" className="service-card">
        <div className="card text-center p-4 ">
          <img
            src={`data:image/png;base64,${service.image.img}`}
            className="img-fluid m-auto card-img-top service-img"
            alt="..."
          />
          <div style={{ color: "black" }} className="card-body">
            <h5 className="card-title">{service.title}</h5>
            <p className="card-text">{service.designation}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Services;
