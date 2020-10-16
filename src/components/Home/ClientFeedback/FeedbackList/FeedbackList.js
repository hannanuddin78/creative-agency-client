import React from "react";

const FeedbackList = ({ fb }) => {
  return (
    <div className="col-md-4">
      <div className="card p-4">
        <div className="row">
          <div className="col-md-3 ">
            <img
              src={fb.img}
              className="rounded-circle img-fluid m-auto service-img "
              alt="..."
            />
          </div>
          <div className="col-md-9 fb-title">
            <h5 className="">{fb.name}</h5>
            <h6>{fb.companyName}</h6>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">{fb.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackList;
