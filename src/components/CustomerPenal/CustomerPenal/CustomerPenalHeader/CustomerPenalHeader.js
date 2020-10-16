import React, { useContext } from "react";
import { UserContext } from "../../../../App";
import AgencyLogo from "../../../AgencyLogo/AgencyLogo";

const CustomerPenalHeader = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="row  mt-4 mb-3">
      <div className="col-md-2">
        <AgencyLogo></AgencyLogo>
      </div>
      <div className="col-md-5">
        <h3>Order</h3>
      </div>
      <div className="col-md-5">
        <h3 className="float-right">{loggedInUser.name} </h3>
      </div>
    </div>
  );
};

export default CustomerPenalHeader;
