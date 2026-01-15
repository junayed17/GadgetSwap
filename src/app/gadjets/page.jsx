"use client"; // <--- Thik kora hoyeche
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
console.log(data,category);

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const url = category
        ? `http://localhost:5000/gadgets/category/${category}`
        : `http://localhost:5000/gadgets`;

      const res = await fetch(url);
      const result = await res.json();
      setData(Array.isArray(result) ? result : []); // Result array na hole empty array set korbe
    } catch (err) {
      console.error("Data ante error hoise:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [category]);

const getButtonStyle = (btnCategory) => {
  const isActive = category === btnCategory;
  return isActive
    ? "bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap"
    : "bg-slate-800 text-slate-300 px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap";
};


 if (loading) {
   return (
     <div className="min-h-screen bg-slate-950 flex items-center justify-center">
       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
     </div>
   );
 }

  return (
    <div className="max-w-7xl mx-auto px-4 my-24">
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
        <button
          className={getButtonStyle("")}
          onClick={() => {
            setCategory("");
          }}
        >
          All
        </button>
        <button
          className={getButtonStyle("Smartphone")}
          onClick={() => {
            setCategory("Smartphone");

          }}
        >
          Smartphone
        </button>
        <button
          className={getButtonStyle("Laptop")}
          onClick={() => {
            setCategory("Laptop");
          }}
        >
          Laptops
        </button>
        <button
          className={getButtonStyle("Gaming")}
          onClick={() => {
            setCategory("Gaming");
          }}
        >
          Gaming
        </button>
      </div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-100">Featured Items</h2>
        <button className="text-blue-400 text-sm font-semibold flex items-center gap-1 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
          Filter <span className="material-symbols-outlined text-sm">tune</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Page;
