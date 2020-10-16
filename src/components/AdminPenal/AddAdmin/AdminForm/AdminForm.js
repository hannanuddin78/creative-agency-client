import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const AdminForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    const addAdmin = { ...data };
    fetch("https://gentle-escarpment-52580.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addAdmin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          history.push("/");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <div className="col">
          <label>Service Title</label>
          <input
            name="Email"
            placeholder="jon@gamil.com"
            ref={register({ required: true })}
            className="form-control"
          />
          {errors.Email && <span>This field is required</span>}
          <button type="submit" className="btn dark-btn addService-btn">
            Send
          </button>
        </div>
        <div className="col"></div>
      </div>
    </form>
  );
};

export default AdminForm;
