import React from "react";

// const options = [
//   { value: "pending", label: "pending" },
//   { value: "ongoing", label: "ongoing" },
//   { value: "done", label: "done" },
// ];

const SeeServiceList = ({ service }) => {
  const handleChange = (e) => {
    fetch("https://gentle-escarpment-52580.herokuapp.com/update-status", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: e.target.value,
        id: service._id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <tr>
      <td>{service.name}</td>
      <td>{service.email}</td>
      <td>{service.project}</td>
      <td>{service.projectDetails}</td>
      <td>
        <form>
          <select id="Status">
            <option
              value="pending"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              pending
            </option>
            <option
              value="done"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              done
            </option>
            <option
              value="on going"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              on going
            </option>
          </select>
        </form>
      </td>
    </tr>
  );
};

export default SeeServiceList;
