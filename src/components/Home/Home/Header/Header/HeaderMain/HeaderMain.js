import React from "react";
import frame from "../../../../../../images/logos/Frame.png";

const HeaderMain = () => {
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-md-5">
          <div className="d-flex header-main-left">
            <h1 className="mb-4">
              Let’s Grow Your <br /> Brand To The <br /> Next Level
            </h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat
            </p>
            <button type="button" className="btn btn-dark dark-btn">
              Hire us
            </button>
          </div>
        </div>
        <div className="col-md-7">
          <img className="img-fluid pr-5" src={frame} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
