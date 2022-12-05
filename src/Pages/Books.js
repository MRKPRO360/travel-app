import { useParams } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import BgContext from "../Context/BgContext";

import Book from "./Shared/Book";
import Map from "./Shared/Map";
import BookSkeleton from "./Shared/BookSkeleton";
import MapSkeleton from "./Shared/MapSkeleton";

export default function Books() {
  const { changeBg } = useContext(BgContext);
  useEffect(() => {
    changeBg(false);
  }, [changeBg]);
  const params = useParams();

  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://new-travel-server.vercel.app/books/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setBooks(data);
      });
  }, [params.id]);

  const { booking, coords } = books;
  return (
    <div className="flex flex-col gap-10 xl:gap-4 xl:flex-row">
      <div className="xl:w-3/5">
        <h1 className="mb-8 text-xl font-semibold text-gray-800 md:text-3xl">
          Stay in {loading ? "..." : `${books.title}`}
        </h1>
        <div className="space-y-8">
          {loading ? (
            <BookSkeleton cards={3} />
          ) : (
            booking.map((el, i) => <Book key={i} book={el} />)
          )}
        </div>
      </div>
      <div className=" h-96 xl:h-auto xl:w-[500px]">
        {loading ? <MapSkeleton /> : <Map coords={coords} />}
      </div>
    </div>
  );
}
