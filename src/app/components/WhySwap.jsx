import React from 'react';
import { MdPayments, MdVerified } from 'react-icons/md';
import { SiLeaflet } from "react-icons/si";

const WhySwap = () => {
  return (
    <section className="px-4 py-12">
      <div className="bg-slate-900/30 rounded-[2.5rem] px-2 py-8 sm:p-8 border border-slate-800">
        <h2 className="text-2xl font-black mb-8 text-center">Why Swap?</h2>
        <div className="grid grid-cols-1 gap-8 ">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
              <span className="material-symbols-outlined text-blue-500 text-3xl">
                <SiLeaflet />
              </span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-100">Eco-friendly</h3>
              <p className="text-sm text-slate-400">
                Reduce e-waste and your carbon footprint by giving tech a second
                life.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
              <span className="material-symbols-outlined text-blue-500 text-3xl">
                <MdPayments />
              </span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-100">Way Cheaper</h3>
              <p className="text-sm text-slate-400">
                Get flagship performance for a fraction of the retail price.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
              <span className="material-symbols-outlined text-blue-500 text-3xl">
                <MdVerified/>
              </span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-100">
                Verified Only
              </h3>
              <p className="text-sm text-slate-400">
                Every gadget undergoes a 50-point inspection before it lists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySwap;