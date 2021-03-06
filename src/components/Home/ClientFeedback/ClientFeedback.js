import React, { useEffect, useState } from "react";
import customer1 from "../../../images/customer-1.png";
import customer2 from "../../../images/customer-2.png";
import customer3 from "../../../images/customer-3.png";
import FeedbackList from "./FeedbackList/FeedbackList";
import loader from "../../../images/loder/200.gif";

const feedback = [
  {
    id: 1,
    title: "Nash Patrik",
    jobTitle: "CEO, Manpol",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    img: customer1,
  },
  {
    id: 2,
    title: "Miriam Barron",
    jobTitle: "CEO, Manpol",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    img: customer2,
  },
  {
    id: 3,
    title: "Bria Malone",
    jobTitle: "CEO, Manpol",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    img: customer3,
  },
];

const ClientFeedback = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://gentle-escarpment-52580.herokuapp.com/seeReview")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <section className="container mb-5">
      <h2 className="text-center mb-4">
        Clients <span style={{ color: "#7AB259" }}>Feedback</span>
      </h2>
      <div className="row mt-5">
        {review.map((fb) => (
          <FeedbackList key={fb._id} fb={fb}></FeedbackList>
        ))}
        {review.length < 1 && (
          <img src={loader} style={{ width: "300px", margin: "auto" }} alt="" />
        )}
      </div>
    </section>
  );
};

export default ClientFeedback;
