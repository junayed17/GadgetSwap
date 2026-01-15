import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { MdDevices } from 'react-icons/md';

const Footer = () => {
  return (
    <section className="px-4 py-12 border-t border-slate-800 bg-slate-950">
      <div className="flex flex-col items-center gap-8 max-w-screen-xl mx-auto">
        <Link className="flex items-center gap-2" href="/">
          <span className=" text-blue-600 text-2xl">
            <MdDevices />
          </span>
          <span className="font-black text-lg tracking-tight text-slate-50">
            GadgetSwap
          </span>
        </Link>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
          <a className="hover:text-blue-400" href="#">
            Safety
          </a>
          <a className="hover:text-blue-400" href="#">
            Fees
          </a>
          <a className="hover:text-blue-400" href="#">
            Help Center
          </a>
          <a className="hover:text-blue-400" href="#">
            Careers
          </a>
        </div>
        <div className="flex gap-6">
          {/* Facebook */}
          <Link
            className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-500 hover:text-blue-500 transition-colors border border-slate-800"
            href="https://www.facebook.com/junayed.ahmed.10690203"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="text-xl" />
          </Link>

          {/* YouTube */}
          <Link
            className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-500 hover:text-red-500 transition-colors border border-slate-800"
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube className="text-xl" />
          </Link>

          {/* Instagram */}
          <Link
            className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-500 hover:text-pink-500 transition-colors border border-slate-800"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-xl" />
          </Link>
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-700 font-bold">
          © 2024 GadgetSwap. Redefining Ownership.
        </p>
      </div>
    </section>
  );
};

export default Footer;