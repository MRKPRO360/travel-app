import { FaStar } from "react-icons/fa";

export default function Book({ book }) {
  const {
    img,
    baths,
    bedrooms,
    beds,
    benefit,
    guest,
    heading,
    outOf,
    price,
    ratings,
    extra,
    total,
  } = book;
  return (
    <div className="flex gap-6 flex-col sm:flex-row">
      <img
        src={img}
        alt="book info"
        className="object-cover object-center w-full h-60 sm:w-[292px] sm:h-48 rounded"
      />
      <div className="flex flex-col justify-between gap-3 sm:gap-0">
        <h3 className="xs:text-base sm:text-lg text-xl font-medium text-gray-800 dark:text-white">
          {heading}
        </h3>
        <div className="flex gap-1 xs:text-xs text-sm text-gray-400">
          <span>{guest} guests</span>
          <span>{bedrooms} bathrooms</span>
          <span>{beds} beds</span>
          <span>{baths} baths</span>
        </div>
        <p className="xs:text-sm">{benefit}</p>
        <p className="xs:text-sm">{extra}</p>
        <div className="flex gap-5 sm:gap-2">
          <div className="flex items-center">
            <FaStar className="text-amber-400" />
            <p className="font-semibold text-gray-900">
              {ratings}({outOf})
            </p>
          </div>
          <div className="">
            <p className="font-semibold text-gray-900">
              ${price}/<span className="text-gray-400">night</span> &nbsp;{" "}
              <span className="text-gray-300">${total} total</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
