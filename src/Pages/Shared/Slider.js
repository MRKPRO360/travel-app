import "./others.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/parallax";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

const swiperSlideStyles = {
  width: "270px",
  height: "416px",
  overflow: "hidden",
  borderRadius: "5px",
};
export default function Slider() {
  const [travels, setTravels] = useState([]);
  const swiperRef = useRef();

  useEffect(() => {
    fetch("https://new-travel-server.vercel.app/travels")
      .then((res) => res.json())
      .then((data) => setTravels(data));
  }, []);

  return (
    <div>
      <Swiper
        className="w-full h-full "
        effect="fade"
        speed={600}
        parallax={true}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {travels.length === 0 && (
          <SwiperSlide style={swiperSlideStyles}>
            <Skeleton className="w-full h-full" />
          </SwiperSlide>
        )}

        {travels.length > 0 &&
          travels.map((travel) => (
            <SwiperSlide
              key={travel.id}
              style={swiperSlideStyles}
              className="shadow-lg shadow-gray-700 "
            >
              <Link to={`/travels/${travel.id}`}>
                <img
                  className="object-cover object-center w-full h-full overflow-hidden border-2 border-transparent rounded-lg active:border-2 active:border-amber-400"
                  src={travel.img}
                  alt="Travel "
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="mt-10 space-x-2">
        <button
          className="relative xs:w-8 xs:h-8 w-12 h-12 bg-gray-100 rounded-full"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <MdOutlineArrowBackIos className="xs:text-xl text-3xl absolute top-[50%] left-[50%] transform -translate-x-[55%] block -translate-y-[50%] hover:text-amber-400 transition duration-300" />
        </button>
        <button
          className="relative xs:w-8 xs:h-8 w-12 h-12 bg-gray-100 rounded-full "
          onClick={() => swiperRef.current?.slideNext()}
        >
          <MdOutlineArrowForwardIos className="xs:text-xl text-3xl absolute top-[50%] left-[50%] hover:text-amber-400 transform -translate-x-[45%] block -translate-y-[50%] font-light" />
        </button>
      </div>
    </div>
  );
}
