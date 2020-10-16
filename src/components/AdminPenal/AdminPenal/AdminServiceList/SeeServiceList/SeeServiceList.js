import React from "react";

const SeeServiceList = ({ service }) => {
  return (
    <tr>
      <td>{service.name}</td>
      <td>{service.email}</td>
      <td>{service.project}</td>
      <td>{service.projectDetails}</td>
      <td>{service.phone}</td>
    </tr>
  );
};

export default SeeServiceList;
