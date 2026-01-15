import React from 'react';
import { IoCameraSharp } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";
import { LuHandshake } from "react-icons/lu";

const StepsToSwap = () => {
  return (
    <section className="px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black mb-2">3 Steps to Swap</h2>
        <p className="text-slate-500 text-sm">
          Getting started is easier than you think.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <span className="text-5xl font-black text-slate-700">01</span>
            <span className="material-symbols-outlined text-blue-600 text-2xl">
              <IoCameraSharp />{" "}
            </span>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">List Your Item</h4>
            <p className="text-sm text-slate-400">
              Snap a photo and get an instant value estimate from our AI.
            </p>
          </div>
        </div>
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <span className="text-5xl font-black text-slate-700">02</span>
            <span className="material-symbols-outlined text-blue-600 text-2xl">
              <IoIosChatboxes />
            </span>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">Secure Chat</h4>
            <p className="text-sm text-slate-400">
              Talk to verified buyers and sellers in our encrypted inbox.
            </p>
          </div>
        </div>
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <span className="text-5xl font-black text-slate-700">03</span>
            <span className="material-symbols-outlined text-blue-600 text-2xl">
              <LuHandshake/>
            </span>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">Swap &amp; Save</h4>
            <p className="text-sm text-slate-400">
              Trade directly or buy with GadgetSwap protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsToSwap;