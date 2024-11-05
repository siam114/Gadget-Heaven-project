import classNames from "classnames";
import React from "react";
// import { Link } from "react-router-dom";

const Category = ({ category,selected,setSelected }) => {
  return (
    <div
      role="tablist"
      className="flex p-4 flex-col  items-center bg-base-100 w-[200px] shadow-xl space-y-4 rounded-lg"
    >
      {category.map((category,index) => (
        <button
          key={index}
          onClick={()=>setSelected(category.id)}
          className={classNames(`px-4 py-2 rounded-full text-center font-semibold hover:bg-[#9538E2] hover:text-white transition-colors duration-300`,selected===category.id  ?  "bg-[#9538E2] text-white" : "bg-[#E0E0E0] text-black" )}
        >
          {category.category}
        </button>
      ))}
    </div>
  );
};

export default Category;
