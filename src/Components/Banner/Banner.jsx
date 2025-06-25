import React from "react";
import "../../index.css";
const Banner = () => {
  return (
    <div className="bg-zinc-50 mt-15 rounded-xl">
   <div className=" w-10/12 mx-auto flex justify-between">
   <div className="pt-25">
        <h2 className="playfair-display font-bold text-5xl w-3/5">Books to freshen up your bookshelf</h2>
        <br />
        <button className="mb-25 btn btn-active btn-success text-white text-lg mt-4 bg-[#23BE0A]">
          View The List
        </button>
      </div>
      <div className="w-60 py-10">
        <img src="https://i.ibb.co.com/tp7v16cp/pngwing-1-1.png" alt="" />
      </div>
   </div>
    </div>
  );
};

export default Banner;
