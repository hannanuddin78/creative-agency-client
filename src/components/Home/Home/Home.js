import React from "react";
import ClientFeedback from "../ClientFeedback/ClientFeedback";
import Footer from "../Footer/Footer";
import OurWorks from "../OurWorks/OurWorks";
import ProviderService from "../ProviderService/ProviderService";
import ServiceGroup from "../ServiceGroup/ServiceGroup";
import Header from "./Header/Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <ServiceGroup></ServiceGroup>
      <ProviderService></ProviderService>
      <OurWorks></OurWorks>
      <ClientFeedback></ClientFeedback>
      <Footer></Footer>
    </div>
  );
};

export default Home;
