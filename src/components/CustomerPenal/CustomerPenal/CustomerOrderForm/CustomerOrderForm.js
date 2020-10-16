import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../../App";

const CustomerOrderForm = () => {
  const [file, setFile] = useState(null);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();

  const history = useHistory();

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("project", data.project);
    formData.append("projectDetails", data.projectDetails);
    formData.append("price", data.price);

    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          history.push("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="col-md-5 col-auto ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            name="name"
            defaultValue={loggedInUser.name}
            placeholder="Your name / company’s name"
            ref={register({ required: true })}
            className="form-control"
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <input
            name="email"
            defaultValue={loggedInUser.email}
            placeholder="Your email address"
            ref={register({ required: true })}
            className="form-control"
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <input
            name="project"
            placeholder="Your order name"
            ref={register({ required: true })}
            className="form-control"
          />
          {errors.project && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="projectDetails"
            rows="3"
            ref={register({ required: true })}
            placeholder="Project Details"
          ></textarea>
          {errors.projectDetails && <span>This field is required</span>}
        </div>
        <div className="form-row mb-4">
          <div className="col">
            <input
              type="number"
              name="price"
              className="form-control"
              ref={register({ required: true })}
              placeholder="Price"
            />
            {errors.price && <span>This field is required</span>}
          </div>
          <div className="col">
            <input
              onChange={handleFileChange}
              type="file"
              id="actual-btn"
              name="file"
              ref={register({ required: true })}
              hidden
            />
            <p className="Upload-btn" for="actual-btn">
              Upload project file
            </p>
            {errors.file && <span>This field is required</span>}
          </div>
        </div>
        <button type="button" className="btn btn-dark dark-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default CustomerOrderForm;
