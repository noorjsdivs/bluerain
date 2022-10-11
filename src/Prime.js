import React from "react";
import Banner from "./components/banner/Banner";
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
    </div>
  );
};

export default Prime;
