import React, { useEffect, useState } from "react";
import SeeServiceList from "./SeeServiceList/SeeServiceList";
import LinearProgress from "@material-ui/core/LinearProgress";

const AdminServiceList = () => {
  const [serviceList, setServiceList] = useState([]);
  useEffect(() => {
    fetch("https://gentle-escarpment-52580.herokuapp.com/orderSeeAdmin")
      .then((res) => res.json())
      .then((data) => {
        setServiceList(data);
      });
  }, []);

  return (
    <section className="order-right p-4">
      <div className="card p-2">
        <table className="table table-borderless">
          <thead className="p-2" style={{ backgroundColor: "#F5F6FA" }}>
            <tr>
              <th className="text-secondary" scope="col">
                Name
              </th>
              <th className="text-secondary" scope="col">
                Email ID
              </th>
              <th className="text-secondary" scope="col">
                Project name
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
              <SeeServiceList
                key={service._id}
                service={service}
              ></SeeServiceList>
            ))}
          </tbody>
        </table>
        {serviceList.length < 1 && (
          <LinearProgress color="secondary" style={{ width: "100%" }} />
        )}
      </div>
    </section>
  );
};

export default AdminServiceList;
