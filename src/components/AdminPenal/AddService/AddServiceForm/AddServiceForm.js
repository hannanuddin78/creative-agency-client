import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const AddServiceForm = () => {
  const [file, setFile] = useState(null);
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const onSubmit = (data) => {
    const serviceData = new FormData();
    serviceData.append("file", file);
    serviceData.append("title", data.title);
    serviceData.append("designation", data.designation);

    fetch("https://gentle-escarpment-52580.herokuapp.com/addService", {
      method: "POST",
      body: serviceData,
    })
      .then((response) => response.json())
      .then((success) => {
        if (success) {
          history.push("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card p-4 mb-3">
        <div className="form-row mb-4">
          <div className="col-md-6">
            <div className="form-group">
              <label>Service Title</label>
              <input
                name="title"
                placeholder="Enter title"
                ref={register({ required: true })}
                className="form-control"
              />
              {errors.title && <span>This field is required</span>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Icon</label>
              <br />
              <input
                onChange={handleFileChange}
                type="file"
                name="file"
                ref={register({ required: true })}
              />
              {errors.file && <span>This field is required</span>}
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6">
            <label>Description</label>
            <textarea
              className="form-control"
              name="designation"
              rows="3"
              ref={register({ required: true })}
              placeholder="Enter Designation"
            ></textarea>
            {errors.designation && <span>This field is required</span>}
          </div>
        </div>
      </div>
      <button type="submit" className="float-right btn dark-btn addService-btn">
        Send
      </button>
    </form>
  );
};

export default AddServiceForm;
