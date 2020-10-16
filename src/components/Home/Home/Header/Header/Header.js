import React from "react";
import HeaderMain from "./HeaderMain/HeaderMain";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";

const Header = () => {
  return (
    <section className="header-container">
      <HeaderNavbar></HeaderNavbar>
      <HeaderMain></HeaderMain>
    </section>
  );
};

export default Header;
