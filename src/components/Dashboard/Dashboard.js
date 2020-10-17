import React, { useEffect, useState } from "react";
import AdminPenal from "../AdminPenal/AdminPenal/AdminPenal";
import CustomerPenal from "../CustomerPenal/CustomerPenal/CustomerPenal";
import "./Dashboard.css";

const Dashboard = () => {
  const [admin, setAdmin] = useState(true);

  const getEmail = sessionStorage.getItem("userEmail");
  useEffect(() => {
    fetch(`https://gentle-escarpment-52580.herokuapp.com/check-admin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: getEmail }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.admin === true) {
          setAdmin(true);
        } else if (data.admin === false) {
          setAdmin(false);
        }
      });
  }, []);

  return (
    <>
      {admin === false ? (
        <section>
          <CustomerPenal></CustomerPenal>
        </section>
      ) : (
        ""
      )}
      {admin === true ? (
        <section>
          <AdminPenal></AdminPenal>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Dashboard;
