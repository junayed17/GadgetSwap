"using client"
import Cookies from 'js-cookie';
import React from 'react';
import toast from 'react-hot-toast';

const LogOut = () => {
function HandleLogOut() {
  Cookies.remove("user");
  toast.success("you have been logged out successfully");
}
  return (
    <div className='flex items-center justify-center gap-2'>
      <div className='w-10 h-10 rounded-full border border-blue-500 overflow-hidden'>
        <img
          src="https://i.ibb.co.com/q3yCdFnK/Screenshot-2026-01-04-173715.png"
          alt="userIng"
          className='w-full h-full object-cover'
        />
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-full font-bold transition-all" onClick={HandleLogOut} type='button'>Logout</button>
    </div>
  );
};

export default LogOut;