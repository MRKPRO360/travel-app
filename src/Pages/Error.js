import { useContext } from "react";
import BgContext from "../Context/BgContext";
import { Link } from "react-router-dom";
export default function Error() {
  const { changeBg } = useContext(BgContext);
  changeBg(false);
  return (
    <div className="h-[45vh] flex items-center justify-center">
      <h1 className="text-2xl font-semibold text-gray-800">
        The page you are looking for is currently unavailable :( Go instead
        &nbsp;
        <Link className="underline" to="/">
          home
        </Link>
        &nbsp;page.
      </h1>
    </div>
  );
}
