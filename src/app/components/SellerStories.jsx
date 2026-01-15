import React from 'react';
import { FaRegStar } from 'react-icons/fa6';

const SellerStories = () => {
  return (
    <section className="px-4 py-16 bg-slate-950/50">
      <div className="mb-8">
        <h2 className="text-3xl font-black">Seller Stories</h2>
        <p className="text-slate-500 text-sm">Real people, real trades.</p>
      </div>
      <div className="space-y-4">
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <div className="flex items-center gap-4 mb-4">
            <img
              alt="Sarah"
              className="w-12 h-12 rounded-full object-cover border border-slate-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzsniU5NNteVtjbDfOF8MX-NhCa7ayXkgJ7zvF-pqeTsisFZH1hxBAMhhs9lLSuRwCvLGqb0slzcqIQCwylTZqPutzycTiaDmjXVTTkUI90F8HXLZy71XscXPohoXrJauepgDl4NZrtPU6we6XYRydZ3cz9Seh9-3UAKqbR5nrdPNM9IfyOfIISt1pQMtrdmWBE7jQjq29PZCrx85HGbUTUHXK2pkSt9YP2O2sYrfKT_o6MfymRNZXjIRFNMqSZ_lmsnqDUclx4A"
            />
            <div>
              <h4 className="font-bold text-sm text-slate-100">
                Sarah Jenkins
              </h4>
              <div className="flex text-amber-500 text-[10px]">
                <span className="material-symbols-outlined text-xs">
                  <FaRegStar />{" "}
                </span>
                <span className="material-symbols-outlined text-xs">
                  <FaRegStar />{" "}
                </span>
                <span className="material-symbols-outlined text-xs">
                  <FaRegStar />{" "}
                </span>
                <span className="material-symbols-outlined text-xs">
                  <FaRegStar />{" "}
                </span>
                <span className="material-symbols-outlined text-xs">
                  <FaRegStar />{" "}
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-400 italic">
            "I traded my old gaming console for a MacBook. The process was so
            smooth and the verification gave me total peace of mind!"
          </p>
        </div>
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <div className="flex items-center gap-4 mb-4">
            <img
              alt="Marcus"
              className="w-12 h-12 rounded-full object-cover border border-slate-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaskbAYU6gL5tKsITlXScXcfwnFZcmeg5dSIX29tkBuSTeU-P4qQpmlYo6CGqAw9AB-BYCuHfLbIIK5FfCe_Ax9TFeP2UJpI6YOVAkNoQ-wqSD86emQI453hoLvP1E7h0YBuxRYGxkuC2SuCQvN8Cuh508ujZWamCnOxTQzJIbC7dXjBV-Bo4HKMO8eXq8tVolJ7ry692XG89JYjDEZ5TKtgY_VVPmbqazYRMWt1NqPocTTqdzZ4PIGAzzAzLta8wynyjTkQgnww"
            />
            <div>
              <h4 className="font-bold text-sm text-slate-100">Marcus Leone</h4>
              <div className="flex text-amber-500 text-[10px]">
                <span className="material-symbols-outlined text-xs">
                  <FaRegStar />{" "}
                </span>
                <span className="material-symbols-outlined text-xs">
                  <FaRegStar />{" "}
                </span>
                <span className="material-symbols-outlined text-xs">
                  <FaRegStar />{" "}
                </span>
                <span className="material-symbols-outlined text-xs">
                  <FaRegStar />{" "}
                </span>
                <span className="material-symbols-outlined text-xs">
                  <FaRegStar />{" "}
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-400 italic">
            "Best platform for techies. Sold my camera gear in 2 days at a price
            much higher than trade-in programs."
          </p>
        </div>
      </div>
    </section>
  );
};

export default SellerStories;