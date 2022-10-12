import React from "react";

const ClientMsg = () => {
  return (
    <div className="w-full py-20 bg-[#DCDCDC]">
      <div className="max-w-screen-xl mx-auto px-4 flex">
        <div className="w-1/2 font-bodyFont flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-[#434343]">
            What Our Client Say
          </h2>
          <p className="text-base w-2/3">
            We are having 450+ existing clients in world wide who are enjoying
            professional web services from our team.
          </p>
        </div>
        <div className="w-1/2">
          <h2>What Our Client Say</h2>
          <p>
            We are having 450+ existing clients in world wide who are enjoying
            professional web services from our team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientMsg;
