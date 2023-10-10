import React from "react";
import {FaSearch} from 'react-icons/fa';
import{Link} from 'react-router-dom';

const header = () => {
  return (
    <header className="border-t-gray-800 shadow-lg">
      <div className="flex justify-between max-w-7xl mx-auto items-center p-3 rounded-md">
        <Link to='/'>
           <h1 className="font-bold text-xl sm:text-3xl flex flex-wrap ">
             <span className="text-slate-700 fon"> M.K_</span>
             <span className="text-slate-900">Estate</span>
           </h1>
        </Link>
        
        <form className="bg-slate-200 items-center rounded-lg flex p-3 ">
          <input type="text" placeholder="Search...."  className="bg-transparent focus:outline-none w-24 sm:w-64"/>
          <FaSearch className=" text-slate-600"/>
        </form>
        <ul className="flex gap-2 sm:gap-6">
          <Link to='/'><li className="hidden sm:inline-block text-slate-900 hover:underline text-lg font-semibold">Home</li></Link>
          <Link to='/about'><li className="hidden sm:inline-block text-slate-900 hover:underline text-lg font-semibold">About</li></Link>
          <Link to='/sign-in'><li className="hidden sm:inline-block text-slate-900 hover:underline text-lg font-semibold">Signin</li></Link>
    
        </ul>
        
          
          
      </div>
    </header>
  );
};

export default header;
