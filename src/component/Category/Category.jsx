import React from "react";
import { Link } from "react-router-dom";

const Category = ({category}) => {
  return (
    <div role="tablist" className="flex p-4 flex-col  items-center bg-base-100 w-[200px] shadow-xl space-y-4 rounded-lg">
      {
        category.map(category => <Link key={category.category} to="/" role="tab" className="bg-[#E0E0E0] text-black px-4 py-2 rounded-full text-center font-semibold hover:bg-[#9538E2] hover:text-white transition-colors duration-300">{category.category}</Link>)
      }
    </div>
  );
};

export default Category;
