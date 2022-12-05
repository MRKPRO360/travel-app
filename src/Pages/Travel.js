import { Link, useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoCalendarClear } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import BgContext from "../Context/BgContext";
export default function Travel() {
  const { changeBg } = useContext(BgContext);
  useEffect(() => {
    changeBg(true);
  }, [changeBg]);
  const travel = useLoaderData();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 7);

  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(tomorrow);

  const onFromChange = function (date) {
    setDateFrom(date);
  };
  const onToChange = function (date) {
    setDateTo(date);
  };

  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);

  const handleSumbit = function (e) {
    e.preventDefault();
  };

  const handleFormEnter = function () {
    if (showFrom) {
      setShowFrom(false);
    }
    if (showTo) {
      setShowTo(false);
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-between gap-16 md:flex-row lg:gap-32">
        <div className="order-2 w-full md:w-1/2 md:order-1">
          <h1 className="text-3xl font-bold tracking-wide text-gray-100 lg:text-5xl">
            {travel.title}
          </h1>
          <p className="mt-10 text-sm font-semibold text-gray-300 md:text-base">
            {travel.text}
          </p>
        </div>
        <div className="order-1 w-full p-2 space-y-5 bg-white rounded md:w-1/2 md:order-2 lg:w-96">
          <div>
            <label
              htmlFor="origin"
              className="block mb-2 font-semibold text-gray-500"
            >
              Origin
            </label>
            <input
              readOnly
              type="text"
              value="Dhaka"
              className="w-full px-4 py-2 font-black text-gray-800 bg-gray-200 rounded focus:outline-none caret-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="destination"
              className="block mb-2 font-semibold text-gray-500"
            >
              Destination
            </label>
            <input
              readOnly
              type="text"
              value={travel.title}
              className="w-full px-4 py-2 font-black text-gray-800 bg-gray-200 rounded focus:outline-none caret-transparent"
            />
          </div>
          <form
            onMouseEnter={handleFormEnter}
            onSubmit={handleSumbit}
            className="flex items-center justify-between gap-2"
          >
            <div className="relative w-1/2">
              <label
                htmlFor="from"
                className="block mb-2 font-semibold text-gray-500"
              >
                From
              </label>
              <input
                onClick={() => setShowFrom(!showFrom)}
                readOnly
                value={dateFrom.toLocaleDateString()}
                type="text"
                className="w-full px-4 py-2 font-black text-gray-800 bg-gray-200 rounded xs:px-2 focus:outline-none "
              />
              {showFrom ? (
                <FaTimes className="absolute right-3 top-11" />
              ) : (
                <IoCalendarClear className="absolute right-3 top-11" />
              )}
            </div>
            <div className="relative flex-1">
              <label
                htmlFor="destination"
                className="block mb-2 font-semibold text-gray-500"
              >
                To
              </label>
              <input
                onClick={() => setShowTo(!showTo)}
                readOnly
                value={dateTo?.toLocaleDateString()}
                type="text"
                className="w-full px-4 py-2 font-black text-gray-800 bg-gray-200 rounded xs:px-2 focus:outline-none "
              />
              {showTo ? (
                <FaTimes className="absolute right-3 top-11" />
              ) : (
                <IoCalendarClear className="absolute right-3 top-11" />
              )}
            </div>
          </form>

          <Link className="block" to={`/books/${travel.id}`}>
            <button className="w-full px-3 py-2 font-semibold text-white transition duration-300 rounded bg-amber-400 hover:bg-amber-500">
              Start Booking
            </button>
          </Link>
        </div>
      </div>

      <div
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
          showFrom ? "blok" : "hidden"
        }`}
      >
        <Calendar onChange={onFromChange} value={dateFrom} />
      </div>

      <div
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
          showTo ? "blok" : "hidden"
        }`}
      >
        <Calendar onChange={onToChange} value={dateTo} />
      </div>
    </div>
  );
}
