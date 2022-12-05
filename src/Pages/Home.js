import React, { useContext } from "react";
import { useEffect } from "react";
import BgContext from "../Context/BgContext";
import Slider from "./Shared/Slider";

export default function Home() {
  const { changeBg } = useContext(BgContext);
  useEffect(() => {
    changeBg(true);
  }, [changeBg]);
  return (
    <div className="flex flex-col gap-16  lg:gap-5 lg:flex-row">
      <div className="flex-1 order-2 lg:order-1">
        <h1 className="text-xl font-bold tracking-wide text-gray-100 sm:text-2xl md:text-3xl lg:text-5xl">
          Fascinated Place To Stay <span className="text-amber-500">...</span>
        </h1>
        <p className="mt-6 text-base font-semibold text-gray-300 md:mt-10 md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sint
          eaque necessitatibus doloribus non molestias inventore qui officia
          culpa odit.
        </p>
        <button className="px-5 py-2 mt-5 text-base font-semibold text-white transition duration-300 transform rounded md:text-xl bg-amber-400 hover:bg-amber-500 active:shadow-gray-800 active:shadow-md active:translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
          Booking
        </button>
      </div>
      <div className="order-1 transform lg:w-2/3 lg:translate-x-52 lg:order-2">
        <Slider />
      </div>
    </div>
  );
}
