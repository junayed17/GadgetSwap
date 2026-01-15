"use client"
import React from "react";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import {
  MdEmail,
  MdOutlineKeyboardArrowLeft,
  MdVerified,
} from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import { useParams } from "next/navigation";

const GadgetDetails = () => {
  const id=useParams();
  console.log(id);
  

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 pb-20 lg:pb-10 my-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Navigation Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <Link href="/gadjets" className="flex items-center gap-3 group cursor-pointer">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 group-hover:border-blue-500 transition-all shadow-lg">
              <MdOutlineKeyboardArrowLeft className="text-2xl" />
            </button>
            <span className="font-bold text-slate-400 group-hover:text-slate-200 transition-colors">
              Back to Listings
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-blue-600 hidden md:block"></div>
            <h1 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">
              Product Archive / Details
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20">
          {/* Left Column: Image Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group">
              <img
                alt="Product"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=1200&auto=format&fit=crop"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-blue-600/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-400/30 shadow-xl">
                  Verified Listing
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 px-2">
              <div className="w-20 h-20 rounded-2xl border-2 border-blue-600 overflow-hidden cursor-pointer shadow-lg ring-4 ring-blue-600/10">
                <img
                  src="https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=200"
                  className="object-cover w-full h-full"
                  alt="thumb"
                />
              </div>
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 rounded-2xl border border-slate-800 overflow-hidden opacity-40 hover:opacity-100 transition-all cursor-pointer bg-slate-900 hover:border-slate-600"
                >
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                  iPhone 14 Pro
                </h2>
                <div className="flex flex-col items-end">
                  <span className="text-3xl md:text-4xl font-black text-blue-500">
                    $899
                  </span>
                  <span className="text-xs font-bold text-slate-500 line-through">
                    $1,099
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-lg font-medium">
                Space Black <span className="mx-2 text-slate-700">•</span> 256GB{" "}
                <span className="mx-2 text-slate-700">•</span> Unlocked
              </p>
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-3 mb-10 pb-6 border-b border-slate-800/50">
              <div className="flex gap-1 text-yellow-500">
                {[...Array(4)].map((_, i) => (
                  <AiFillStar key={i} className="text-lg" />
                ))}
                <AiFillStar className="text-lg text-slate-700" />
              </div>
              <span className="text-sm font-bold text-slate-500 tracking-wide">
                4.8 <span className="text-slate-700 mx-1">|</span> 128 Reviews
              </span>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: "Battery", value: "94% Health" },
                { label: "Condition", value: "Mint" },
                { label: "Storage", value: "256 GB" },
                { label: "Warranty", value: "3 Months" },
              ].map((spec, index) => (
                <div
                  key={index}
                  className="p-5 rounded-[1.5rem] bg-slate-900/40 border border-slate-800/60 hover:border-slate-700 transition-colors"
                >
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">
                    {spec.label}
                  </p>
                  <p className="text-base font-bold text-slate-200">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mb-10">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-600 mb-4 flex items-center gap-2">
                <span className="w-6 h-px bg-slate-800"></span> Seller's Note
              </h3>
              <p className="text-slate-400 leading-relaxed text-base md:text-lg italic font-medium">
                "Used for less than a year. Always kept in a protective case and
                screen protector. No visible scratches. Selling because I
                upgraded to 16 Pro."
              </p>
            </div>

            {/* Seller Profile */}
            <div className="p-5 bg-gradient-to-r from-slate-900 to-slate-900/50 rounded-[2rem] border border-slate-800 flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src="https://i.pravatar.cc/150?u=sarah"
                    className="w-14 h-14 rounded-2xl object-cover ring-2 ring-slate-800"
                  />
                  <MdVerified className="absolute -bottom-1 -right-1 text-blue-500 bg-slate-950 rounded-full text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight">
                    Sarah Jenkins
                  </h4>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                    Pro Seller
                  </p>
                </div>
              </div>
              <button className="bg-slate-800 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg active:scale-95">
                View Profile
              </button>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex gap-4">
              <button className="flex-1 bg-slate-900 border border-slate-800 hover:border-slate-600 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl">
                <MdEmail className="text-xl" /> Message
              </button>
              <button className="flex-[2] bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-[0_10px_40px_-10px_rgba(37,99,235,0.5)] transition-all active:scale-95 text-white">
                <HiOutlineArrowsRightLeft className="text-xl" /> Propose Swap
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-5 bg-slate-950/80 backdrop-blur-xl border-t border-slate-800/50 flex gap-3 z-50">
        <button className="flex-1 bg-slate-900 border border-slate-800 py-4 rounded-2xl font-bold flex items-center justify-center transition-all active:scale-95 shadow-xl">
          <MdEmail className="text-2xl" />
        </button>
        <button className="flex-[3] bg-blue-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-blue-600/30 active:scale-95">
          <HiOutlineArrowsRightLeft className="text-xl" />
          Propose Swap
        </button>
      </div>
    </div>
  );
};

export default GadgetDetails;
