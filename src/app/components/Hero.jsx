import React from 'react';
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";

const Hero = () => {
  return (
    <section className="px-4 py-6">
      <div
        className="relative overflow-hidden rounded-3xl min-h-[500px] flex flex-col items-center justify-center text-center p-6 bg-slate-900/50 border border-slate-800"
        style={{
          backgroundImage:
            'linear-gradient(rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTVXhktcddTv8ltxIK9S2eR5NG1feFgJhIzvgdiUjCR_2hCgvUWy7qydVG5UOBbO9xB5woy74wAm345Pyql_dXo_1GurYgprJfw18Y6sF3REVZi4ZPQtq2zdGtv3kK2_H6rFwK7C9H5n99WLdVidHPbHnqhNKGFPA16ndWM1SnNuRMOChdLYUyBE51HpJipYm01xsfGLqtDeZZMHI1NSVKTmxRHhDS3KygKJtxZBMTob-SfdrV3ZVbTfqb1A1LNe_vMDRaOWF5eA")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-md relative z-10">
          <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-[10px] font-black rounded-full mb-4 uppercase tracking-[0.2em] border border-blue-600/30">
            Trusted by 1M+ Users
          </span>
          <h1 className="text-4xl font-black leading-[1.1] mb-4 tracking-tight">
            Upgrade Your Tech <br />
            <span className="text-blue-500">Without the Cost</span>
          </h1>
          <p className="text-slate-400 text-base mb-8 font-normal leading-relaxed">
            The world's safest marketplace to swap, buy, and sell second-hand
            electronics.
          </p>
          <div className="flex flex-col gap-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/25">
              Start Swapping
              <span className="material-symbols-outlined text-sm">
                <HiOutlineArrowsRightLeft/>
              </span>
            </button>
            <div className="flex items-center justify-center gap-4 mt-2">
              <div className="flex -space-x-2">
                <img
                  alt="User"
                  className="w-6 h-6 rounded-full border border-slate-900"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzsniU5NNteVtjbDfOF8MX-NhCa7ayXkgJ7zvF-pqeTsisFZH1hxBAMhhs9lLSuRwCvLGqb0slzcqIQCwylTZqPutzycTiaDmjXVTTkUI90F8HXLZy71XscXPohoXrJauepgDl4NZrtPU6we6XYRydZ3cz9Seh9-3UAKqbR5nrdPNM9IfyOfIISt1pQMtrdmWBE7jQjq29PZCrx85HGbUTUHXK2pkSt9YP2O2sYrfKT_o6MfymRNZXjIRFNMqSZ_lmsnqDUclx4A"
                />
                <img
                  alt="User"
                  className="w-6 h-6 rounded-full border border-slate-900"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaskbAYU6gL5tKsITlXScXcfwnFZcmeg5dSIX29tkBuSTeU-P4qQpmlYo6CGqAw9AB-BYCuHfLbIIK5FfCe_Ax9TFeP2UJpI6YOVAkNoQ-wqSD86emQI453hoLvP1E7h0YBuxRYGxkuC2SuCQvN8Cuh508ujZWamCnOxTQzJIbC7dXjBV-Bo4HKMO8eXq8tVolJ7ry692XG89JYjDEZ5TKtgY_VVPmbqazYRMWt1NqPocTTqdzZ4PIGAzzAzLta8wynyjTkQgnww"
                />
              </div>
              <p className="text-[10px] text-slate-500 font-medium italic">
                Verified swaps today: 1,240
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;