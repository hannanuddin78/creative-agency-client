import React from "react";
import { Link } from "react-router-dom";
import AgencyLogo from "../../../../../AgencyLogo/AgencyLogo";

const HeaderNavbar = () => {
  return (
    <div className="container pt-5 mb-4 ">
      <div className="row">
        <div className="col-md-4 col-sm-4">
          <AgencyLogo></AgencyLogo>
        </div>
        <div className="col-md-8 col-sm-8">
          <nav className="navbar navbar-expand-lg navbar-light float-right">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main-menu"
              aria-controls="main-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main-menu">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active  pr-4  pr-5">
                  <Link to="/">
                    <a className="nav-link">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item  pr-5">
                  <Link to="/portfolio">
                    <a className="nav-link">Our Portfolio</a>
                  </Link>
                </li>
                <li className="nav-item  pr-5">
                  <Link to="/dashboard">
                    <a className="nav-link">Our Team</a>
                  </Link>
                </li>
                <li className="nav-item  pr-5">
                  <Link to="/Contact">
                    <a className="nav-link">Contact Us</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login">
                    <button type="button" className="btn btn-dark dark-btn">
                      Login
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbar;
{
  /* ; */
}
