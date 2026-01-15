import React from "react";
import Card from "../components/Card";

const page = () => {
  return (
    <div className="my-20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-slate-100">Featured Items</h2>
        <button className="text-blue-400 text-sm font-semibold flex items-center gap-1">
          Filter <span className="material-symbols-outlined text-sm">tune</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item,index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
