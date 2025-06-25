import React from "react";
import Navbar from "../../Components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import '../../index.css'
import Banner from "../../Components/Banner/Banner";
import Home from "../Home/Home";


const Root = () => {
  return (
    <div className="source-sans bg-indigo-50 mt-0 pt-4">
      <div className="lg:w-8/12 mx-auto">
        <Navbar ></Navbar>         
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
