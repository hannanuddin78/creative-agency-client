import React from "react";
import slack from "../../../images/logos/slack.png";
import google from "../../../images/logos/google.png";
import uber from "../../../images/logos/uber.png";
import netflix from "../../../images/logos/netflix.png";
import airbnb from "../../../images/logos/airbnb.png";
import GroupList from "./GroupList/GroupList";

const groupList = [
  {
    id: 1,
    img: slack,
  },
  {
    id: 2,
    img: google,
  },
  {
    id: 3,
    img: uber,
  },
  {
    id: 4,
    img: netflix,
  },
  {
    id: 5,
    img: airbnb,
  },
];

const ServiceGroup = () => {
  return (
    <section className="container mt-5 mb-5">
      <div className="row">
        {groupList.map((group) => (
          <GroupList key={group.id} group={group}></GroupList>
        ))}
      </div>
    </section>
  );
};

export default ServiceGroup;
