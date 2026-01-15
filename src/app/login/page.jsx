"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FaLock } from "react-icons/fa6";
import { MdDevices, MdEmail } from "react-icons/md";

const LoginLayout = () => {
  const navigate = useRouter();
  function handleLogin(e) {
    e.preventDefault();
    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    if (userData.email === "demo@gmail.com" && userData.password === "Demo1@") {
      Cookies.set("user", true);

      toast.success("Login successful!");
      navigate.push("/");
    }
  }
  function demoAccount() {
    document.getElementById("email").value = "demo@gmail.com";
    document.getElementById("password").value = "Demo1@";
  }
  return (
    <div className="w-full max-w-sm flex flex-col gap-8 mx-auto my-20">
      <div className="flex flex-col items-center gap-3">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
          <span className="material-symbols-outlined text-white text-4xl font-bold">
            <MdDevices />
          </span>
        </div>
        <h1 className="text-2xl font-black tracking-tight text-white">
          GadgetSwap
        </h1>
        <p className="text-slate-400 text-sm font-medium">
          Welcome back to the swap community
        </p>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 shadow-2xl">
        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          <div className="flex flex-col gap-2">
            <label
              className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl">
                <MdEmail />
              </span>
              <input
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border-slate-700 rounded-2xl text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                id="email"
                placeholder="name@example.com"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center ml-1">
              <label
                className="text-xs font-bold uppercase tracking-widest text-slate-500"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl">
                <FaLock />
              </span>
              <input
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border-slate-700 rounded-2xl text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                id="password"
                placeholder="••••••••"
                type="password"
                name="password"
              />
            </div>
          </div>
          <button
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] mt-2"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-sm text-slate-400">
            Can't find an account?
            <button
              className="text-blue-500 font-bold hover:underline"
              onClick={demoAccount}
            >
              Demo
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
