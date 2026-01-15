"use client"
import React from 'react';
import { IoLogoAppleAppstore, IoLogoGooglePlaystore, IoTodaySharp } from 'react-icons/io5';
import { GrAppleAppStore } from "react-icons/gr";
import Link from 'next/link';
import toast from 'react-hot-toast';
const GetOnNewsLatter = () => {

function handleSubscrive(e) {
  e.preventDefault()
  toast.success("Subscribed successfully!");
}


  return (
    <section className="px-4 py-12">
      <div className="bg-blue-700 rounded-[3rem] p-8 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-4">Join GadgetSwap</h2>
          <p className="text-blue-100 text-sm mb-8">
            Get early access to hot drops and exclusive swap deals.
          </p>
          <div className="flex flex-col gap-3 mb-8">
            <Link
              href="https://www.apple.com/app-store/"
              className="bg-slate-950 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">
                <GrAppleAppStore />
              </span>
              App Store
            </Link>
            <Link  href="https://play.google.com/store/apps" className="bg-white/10 border border-white/20 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3">
              <span className="material-symbols-outlined">
                <IoLogoGooglePlaystore />
              </span>
              Play Store
            </Link>
          </div>
          <div className="pt-6 border-t border-white/10">
            <p className="text-xs font-bold mb-4 uppercase tracking-widest text-blue-200">
              Or get the newsletter
            </p>
            <form className="flex flex-col gap-3">
              <input
                className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-white/50 text-white focus:ring-2 focus:ring-white/30 outline-none"
                placeholder="Enter your email"
                type="email"
              />
              <button className="w-full py-4 rounded-2xl bg-white text-blue-700 font-bold shadow-xl" onClick={handleSubscrive}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full" />
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default GetOnNewsLatter;