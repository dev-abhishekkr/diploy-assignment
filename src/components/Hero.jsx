import { Check, SquarePlay, X } from "lucide-react";
import React, { useState } from "react";
import hero from "../assets/site-invention-gif.gif";

export default function Hero() {
  const [demoVideo, setDemoVideo] = useState(false);

  const handleDemoClick = () => {
    setDemoVideo(!demoVideo);
  };

  return (
    <div className=" pt-20 mx-5 md:mx-20 flex flex-col gap-4 md:flex-row md:justify-between justify-evenly items-center h-svh">
      <div className="flex flex-col md:items-start items-center justify-center">
        <div className="flex flex-col gap-4 items-center md:items-start mt-10 md:mt-0">
          <h1 className="md:hidden text-3xl leading-relaxed font-bold text-center">
            Start Building Powerful Websites & Applications.
          </h1>
          <h1 className="hidden md:block md:text-5xl  leading-relaxed font-bold">
            Start Building Powerful <br />
            Websites & Applications.
          </h1>
          <p className="mt-4 text-sm text-gray-600 ">
            With our ready to launch apps, you can start your business now.
          </p>
        </div>
        <div className="my-10">
          <h2 className="flex items-center gap-4 text-md font-semibold text-gray-700">
            <span>
              <Check size={32} className="text-violet-600 font-bold" />
            </span>
            Secure platform with Tech Supports{" "}
          </h2>
          <h2 className="flex items-center gap-4 text-md font-semibold text-gray-700">
            <span>
              <Check size={32} className="text-violet-600 font-bold" />
            </span>
            Lifetime Updates{" "}
          </h2>
          <h2 className="flex items-center gap-4 text-md font-semibold text-gray-700">
            <span>
              <Check size={32} className="text-violet-600 font-bold" />
            </span>
            100% Code Access
          </h2>
        </div>
        <div className=" flex flex-col gap-3">
          <div className="flex gap-4 items-center justify-center">
            <button className="px-2 md:px-4 py-2 bg-violet-500 text-white text-md font-semibold rounded-sm border border-violet-700 text-center ">
              Start Today
            </button>
            <button
              onClick={handleDemoClick}
              className="px-2 md:px-4 py-2 text-md font-semibold rounded-sm border border-violet-800 hover:text-violet-600 flex items-center gap-1"
            >
              <SquarePlay /> Explore the Demo
            </button>
          </div>
          <p className="text-md font-semibold text-violet-500">
            Trusted by 100+ Startups from all over India
          </p>
          {/* video here rendered  */}
          {demoVideo && (
            <div className="absolute top-36 md:bottom-24  md:right-10">
              <button
                onClick={handleDemoClick}
                className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-700 text-white"
              >
                <X />
              </button>
              <iframe
                className="w-[20rem] h-[10rem] md:w-[34rem] md:h-[20rem]"
                src="https://www.youtube.com/embed/rVJ9prsurCI?si=KuxvFw9WPjH3o2F1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
      {/* Image/right section */}
      <div className="">
        <div className="max-w-[32rem]">
          <img src={hero} alt="hero-img" />
        </div>
      </div>
    </div>
  );
}
