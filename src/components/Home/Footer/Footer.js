import React from "react";
import FooterLeft from "./FooterLeft/FooterLeft";
import FooterRight from "./FooterRight/FooterRight";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-5">
            <FooterLeft></FooterLeft>
          </div>
          <div className="col-md-7">
            <FooterRight></FooterRight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
