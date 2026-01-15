import React from "react";
import { MdDevices } from "react-icons/md";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-4 py-3">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-blue-600 text-3xl font-extrabold">
            <MdDevices/>
          </span>
          <h1 className="text-xl font-black tracking-tight text-slate-50">
            GadgetSwap
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <a className="text-sm font-semibold text-slate-300" href="#">
            Explore
          </a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-full font-bold transition-all">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
