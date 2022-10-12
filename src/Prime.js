import React from "react";
import AboutUs from "./components/aboutUs/AboutUs";
import Banner from "./components/banner/Banner";
import ClientMsg from "./components/clientmsg/ClientMsg";
import Header from "./components/header/Header";
import Whatwedo from "./components/whatwedo/Whatwedo";
import Whoweare from "./components/whoweare/Whoweare";

const Prime = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="px-4">
        <Banner />
        <Whoweare />
        <Whatwedo />
      </div>
      <AboutUs />
      <ClientMsg />
    </div>
  );
};

export default Prime;
