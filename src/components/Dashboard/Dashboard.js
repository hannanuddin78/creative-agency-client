import React, { useEffect, useState } from "react";
import AdminPenal from "../AdminPenal/AdminPenal/AdminPenal";
import CustomerPenal from "../CustomerPenal/CustomerPenal/CustomerPenal";
import "./Dashboard.css";

const Dashboard = () => {
  const [admin, setAdmin] = useState(false);

  const getEmail = sessionStorage.getItem("userEmail");
  console.log(getEmail);
  useEffect(() => {
    fetch(`http://localhost:5000/check-admin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: getEmail }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.admin === true) {
          //   console.log("he is a admin");
          setAdmin(true);
        } else if (data.admin === false) {
          //   console.log("admin not found");
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
