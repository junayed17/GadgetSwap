import React from 'react';
import { IoGameController, IoPhonePortraitOutline } from 'react-icons/io5';
import { MdLaptopMac } from 'react-icons/md';
import { FaHeadphones } from "react-icons/fa6";

const BrowseByCategory = () => {
  return (
    <section className="px-4 py-12">
      <h2 className="text-3xl font-black mb-8 text-center tracking-tight">
        Browse by Category
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="aspect-square bg-slate-900 rounded-3xl flex flex-col items-center justify-center gap-3 border border-slate-800 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-4xl text-slate-400">
            <IoPhonePortraitOutline />
          </span>
          <span className="font-bold text-sm text-slate-300">Phones</span>
        </div>
        <div className="aspect-square bg-slate-900 rounded-3xl flex flex-col items-center justify-center gap-3 border border-slate-800 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-4xl text-slate-400">
            <MdLaptopMac />
          </span>
          <span className="font-bold text-sm text-slate-300">Laptops</span>
        </div>
        <div className="aspect-square bg-slate-900 rounded-3xl flex flex-col items-center justify-center gap-3 border border-slate-800 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-4xl text-slate-400">
            <IoGameController />
          </span>
          <span className="font-bold text-sm text-slate-300">Gaming</span>
        </div>
        <div className="aspect-square bg-slate-900 rounded-3xl flex flex-col items-center justify-center gap-3 border border-slate-800 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-4xl text-slate-400">
            <FaHeadphones />
          </span>
          <span className="font-bold text-sm text-slate-300">Audio</span>
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;