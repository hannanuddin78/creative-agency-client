import React, { useEffect, useState } from "react";
import SeeServiceList from "./SeeServiceList/SeeServiceList";

const AdminServiceList = () => {
  const [serviceList, setServiceList] = useState([]);
  console.log(serviceList);
  useEffect(() => {
    fetch("http://localhost:5000/orderSeeAdmin")
      .then((res) => res.json())
      .then((data) => {
        setServiceList(data);
      });
  }, []);

  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary" scope="col">
            Name
          </th>
          <th className="text-secondary" scope="col">
            Email ID
          </th>
          <th className="text-secondary" scope="col">
            Service
          </th>
          <th className="text-secondary" scope="col">
            Project Details
          </th>
          <th className="text-secondary" scope="col">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {serviceList.map((service) => (
          <SeeServiceList key={service._id} service={service}></SeeServiceList>
        ))}
      </tbody>
    </table>
  );
};

export default AdminServiceList;
