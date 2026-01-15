import Link from "next/link";
import React from "react";
import { MdDevices } from "react-icons/md";

const Nav = () => {
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-2xl bg-slate-900/80 backdrop-blur-md border-b border-white/10 px-4 py-3">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-blue-600 text-3xl font-extrabold">
            <MdDevices/>
          </span>
          <h1 className="text-xl font-black tracking-tight text-slate-50">
            GadgetSwap
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link className="text-sm font-semibold text-slate-300" href="/gadjets">
            Explore
          </Link>
          <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-full font-bold transition-all">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
