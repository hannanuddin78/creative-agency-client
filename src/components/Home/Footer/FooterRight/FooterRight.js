import React from "react";

const FooterRight = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your email address"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your name / company’s name"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Your message"
          ></textarea>
        </div>
        <button type="button" className="btn btn-dark dark-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default FooterRight;
