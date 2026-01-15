import React from "react";
import { FaEye, FaHeart } from "react-icons/fa6"; // React Icons use korlam consistency-r jonno

const Card = () => {
  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-blue-500/50 transition-all duration-300">
      {/* Top Image Section */}
      <div className="aspect-square bg-slate-800 relative overflow-hidden">
        <img
          alt="Phone"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src="https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=500&auto=format&fit=crop"
        />

        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg shadow-blue-600/30 hover:bg-blue-500">
            <FaEye /> View Details
          </button>
        </div>

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 bg-slate-950/50 backdrop-blur-md p-2 rounded-full text-slate-100 hover:text-red-500 transition-colors z-10">
          <FaHeart className="text-sm" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-slate-100 font-bold text-sm mb-1 truncate">
          iPhone 14 Pro Max
        </h3>
        <p className="text-slate-500 text-[11px] mb-3 font-medium">
          128GB • Space Black
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-blue-400 font-black text-lg leading-none">
              $849
            </span>
            <span className="text-[10px] text-slate-600 line-through mt-0.5">
              $999
            </span>
          </div>
          <span className="bg-slate-800 text-slate-400 text-[9px] px-2 py-1 rounded-md font-bold uppercase tracking-wider border border-slate-700">
            Used
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
