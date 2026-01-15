"use client";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import { MdDevices } from "react-icons/md";
import LogOut from "./LogOut";
import { usePathname } from "next/navigation";

const Nav = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const pathname = usePathname();

useEffect(() => {
  const userCookie = Cookies.get("user");
  if (userCookie) {
    setIsLoggedIn(true);
  }
}, []);
const linkStyles = (path) => {
  const isActive = pathname === path;
  return `relative text-sm font-semibold transition-all duration-300 py-1
      ${isActive ? "text-blue-500" : "text-slate-300 hover:text-blue-400"}
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
      after:bg-blue-500 after:transition-all after:duration-300
      ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;
};

console.log(isLoggedIn);

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-2xl bg-slate-900/80 backdrop-blur-md border-b border-white/10 px-4 py-3">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-blue-600 text-3xl font-extrabold">
            <MdDevices />
          </span>
          <h1 className="text-xl font-black tracking-tight text-slate-50">
            GadgetSwap
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link className={linkStyles("/")} href="/">
            Home
          </Link>

          <Link className={linkStyles("/gadjets")} href="/gadjets">
            Explore
          </Link>
          {!isLoggedIn ? (
            <Link
              href="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-full font-bold transition-all"
            >
              Login
            </Link>
          ) : (
            <LogOut />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
