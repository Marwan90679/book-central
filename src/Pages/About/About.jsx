import React from 'react';
import { Link } from "react-router";
const About = () => {
    return (
        <div className="hero bg-zinc-50 min-h-screen mt-15 rounded-lg">
  <div className=" text-center">
    <div className="max-w-xl">
      <h1 className="text-5xl font-bold">About Us</h1>
      <p className="py-6 text-lg">
        Welcome to our online book library — your gateway to timeless classics and modern gems. 
        Our mission is to make reading accessible, enjoyable, and inspiring for everyone. Whether you're 
        into fantasy, romance, mystery, or philosophy, we've got something you'll love. Dive in and discover your next great read.
      </p>
      <Link to='/'> <button className="btn btn-primary">Explore Books</button></Link>
    </div>
  </div>
</div>

    );
};

export default About;