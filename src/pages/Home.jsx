
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-200 dark:bg-gray-900 text-gray-800 dark:text-white font-sans">
      
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-20 py-20 gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-violet-800 dark:text-violet-400 leading-tight mb-6">
            Welcome to <span className="text-gray-900 dark:text-white">TasteNest</span>
          </h1>
          <p className="text-lg text-gray-900 dark:text-gray-300 mb-6">
            Dive into a symphony of flavors. Locally sourced, globally inspired, always delicious.
          </p>
          <Link
            to="/dashboard/dashboardhome"
            className="bg-violet-700 hover:bg-violet-900 text-white font-medium px-6 py-3 rounded-full transition duration-300"
          >
            Pick Your Plate
          </Link>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/18/15/40/cookies-1835414_1280.jpg"
            alt="Delicious Food"
            className="rounded-xl shadow-xl hover:scale-105 transition duration-500"
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-violet-80 dark:bg-gray-800 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Fine Dining Meets Cozy Comfort
        </h2>
        <p className="text-lg text-gray-900 dark:text-gray-300 max-w-2xl mx-auto">
          TasteNest blends elegant dishes with a warm atmosphere. Whether it's a date night, family dinner, or solo escape — we’re here to serve memories on a plate.
        </p>
      </section>
    </div>
  );
};

export default Home;
