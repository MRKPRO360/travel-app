import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Shared/Header";
import bgImage from "../Assets/images/Rectangle 1.png";
import BgContext from "../Context/BgContext";

export default function Main() {
  const { bg } = useContext(BgContext);
  return (
    <div
      className={
        bg
          ? "relative min-h-screen bg-gradient-to-br from-slate-800/70 to-slate-900"
          : "bg-white"
      }
    >
      <img
        src={bgImage}
        alt="hero bg"
        className={
          bg
            ? "absolute z-[-1] top-0 left-0 object-cover w-full h-full"
            : "hidden"
        }
      />
      <div className="w-[85%] 2xl:max-w-screen-2xl mx-auto ">
        <Header />
        <div className="py-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
// https://new-travel-server.vercel.app/
