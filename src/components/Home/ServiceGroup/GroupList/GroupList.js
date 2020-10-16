import React from "react";

const GroupList = ({ group }) => {
  return (
    <div className="col-md-2 mr-auto">
      <img
        style={{ width: "120px", height: "70px" }}
        className="img-fluid"
        src={group.img}
        alt=""
      />
    </div>
  );
};

export default GroupList;
