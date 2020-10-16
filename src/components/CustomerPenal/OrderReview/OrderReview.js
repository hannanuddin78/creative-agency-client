import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import CustomerPenalHeader from "../CustomerPenal/CustomerPenalHeader/CustomerPenalHeader";
import SidebarCustomer from "../CustomerPenal/SidebarCustomer/SidebarCustomer";

const OrderReview = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    const orderReview = { ...loggedInUser, ...data };
    console.log(orderReview);
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderReview),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          history.push("/");
        }
      });
  };

  return (
    <section className="container-fluid">
      <CustomerPenalHeader></CustomerPenalHeader>
      <div className="row">
        <div className="col-md-2">
          <SidebarCustomer></SidebarCustomer>
        </div>
        <div className="col-md-10 order-right pt-5">
          <div className="col-md-5 col-auto ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  name="name"
                  defaultValue={loggedInUser.name}
                  placeholder="Your name "
                  ref={register({ required: true })}
                  className="form-control"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-group">
                <input
                  name="companyName"
                  placeholder="Company’s name, Designation"
                  ref={register({ required: true })}
                  className="form-control"
                />
                {errors.companyName && <span>This field is required</span>}
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="description"
                  rows="3"
                  ref={register({ required: true })}
                  placeholder="Description"
                ></textarea>
                {errors.description && <span>This field is required</span>}
              </div>
              <button type="submit" className="btn btn-primary">
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderReview;
