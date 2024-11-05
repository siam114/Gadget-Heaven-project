import React from "react";
import { useLoaderData } from "react-router-dom";

const Statistic = () => {
    const allData = useLoaderData();
    console.log(allData)
  return (
    <div>
      <div className="text-white bg-[#9538E2] text-center py-10 ">
        <h3 className="text-2xl font-bold pb-5">Statistics</h3>
        <p className="w-7/12 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div>
      <h3 className="text-2xl font-semibold my-10">Statistics</h3>
      </div>
    </div>
  );
};

export default Statistic;
