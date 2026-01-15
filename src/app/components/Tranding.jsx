import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Tranding = () => {
  return (
    <section className="py-8 bg-slate-950">
      <div className="px-4 flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold tracking-tight">Trending Now</h2>
        <Link
          className="text-blue-500 text-xs font-bold flex items-center gap-1"
          href="/gadjets"
        >
          View All{" "}
          <span className="material-symbols-outlined text-xs">
            <MdKeyboardArrowRight />
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 px-4">
        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
          <div className="h-32 bg-slate-800 relative">
            <img
              alt="Product"
              className="w-full h-full object-cover opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTVXhktcddTv8ltxIK9S2eR5NG1feFgJhIzvgdiUjCR_2hCgvUWy7qydVG5UOBbO9xB5woy74wAm345Pyql_dXo_1GurYgprJfw18Y6sF3REVZi4ZPQtq2zdGtv3kK2_H6rFwK7C9H5n99WLdVidHPbHnqhNKGFPA16ndWM1SnNuRMOChdLYUyBE51HpJipYm01xsfGLqtDeZZMHI1NSVKTmxRHhDS3KygKJtxZBMTob-SfdrV3ZVbTfqb1A1LNe_vMDRaOWF5eA"
            />
            <span className="absolute top-2 right-2 bg-emerald-600 text-[10px] font-bold px-2 py-1 rounded-full">
              New
            </span>
          </div>
          <div className="p-3">
            <h3 className="font-bold text-sm truncate text-slate-50">
              iPhone 14 Pro
            </h3>
            <p className="text-[10px] text-slate-500 mb-2">
              Excellent Condition
            </p>
            <div className="flex items-center justify-between">
              <span className="text-blue-400 font-black">$799</span>
              <button className="material-symbols-outlined text-slate-600 text-lg">
                favorite
              </button>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
          <div className="h-32 bg-slate-800 relative">
            <img
              alt="Product"
              className="w-full h-full object-cover opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIE4l3IOPE602o49rGELIpLf-o0NBPqvkbZjCKLPgTqvWs9yTHC0bOOw4HRTkCK6D5urnVwtOtztlDDDJGOKZ-MoWdqvZv3M49kiGYUFtIHjNM6X3J6jNKWzZjyDumD6KzDHUW-UI-k5ld_EMa5SACTdtQfWa-xnCaY7Q_v3tH5xuq9PBG7jLr169OpjfqjKyOcfBnywVW3ieHCZ8u4p2dHzc06Ck4DJO59qYJee31FBu-uBiFk6vBZQbYfyWun6V6zfpIL2JX_w"
            />
            <span className="absolute top-2 right-2 bg-blue-600 text-[10px] font-bold px-2 py-1 rounded-full">
              Hot
            </span>
          </div>
          <div className="p-3">
            <h3 className="font-bold text-sm truncate text-slate-50">
              MacBook Air M2
            </h3>
            <p className="text-[10px] text-slate-500 mb-2">Like New</p>
            <div className="flex items-center justify-between">
              <span className="text-blue-400 font-black">$950</span>
              <button className="material-symbols-outlined text-slate-600 text-lg">
                favorite
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tranding;