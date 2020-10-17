import React, { useEffect } from "react";
import { useState } from "react";
import Services from "./Services/Services";
import loader from "../../../images/loder/200.gif";

const ProviderService = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://gentle-escarpment-52580.herokuapp.com/seeService")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="container pb-5">
      <h2 className="text-center mb-5">
        Provide awesome <span style={{ color: "#7AB259" }}>services</span>
      </h2>
      <div className="row">
        {service.map((service) => (
          <Services key={service._id} service={service}></Services>
        ))}
        {service.length < 1 && (
          <img style={{ width: "300px", margin: "auto" }} src={loader} alt="" />
        )}
      </div>
    </div>
  );
};

export default ProviderService;
