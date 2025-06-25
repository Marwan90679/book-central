import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import { Link } from "react-router";
import ReadList from "../../Pages/ReadList/ReadList";
const Navbar = () => {
  return (
   <nav className="flex bg-white lg:rounded-md py-4  lg:space-x-60 justify-center">
   <div className="flex space-x-2 items-center">
   <FaBookOpenReader  className="lg:text-3xl md:text-xl  text-emerald-400"/>
   <h1 className="font-bold  md:text-xl   lg:text-3xl pl-4 text-sm">Book Center</h1>
   </div>

    <ul className="flex space-x-4 items-center ">
        <Link to='/'><li><button className="px-3 py-2 border border-[#23BE0A] text-[#23BE0A] rounded-lg font-semibold">Home</button></li></Link>
        <Link to='/readList'><li>Read Lists</li></Link>
        <li>Pages to Read</li>
    </ul>
    <div className="flex space-x-6">
    <button className="btn btn-active btn-success border-none rounded-lg  text-white bg-[#23BE0A]">Sign In</button>
   <Link to='/about'> <button className="lg:text-lg text-sm py-0 px-2 lg:p-3   btn btn-active btn-success border-none rounded-lg text-white bg-[#59C6D2]">About</button></Link>
   </div>
   </nav>
  );
};

export default Navbar;
