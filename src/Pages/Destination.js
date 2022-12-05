import { useContext, useEffect } from "react";
import BgContext from "../Context/BgContext";
export default function Destination() {
  const { changeBg } = useContext(BgContext);
  useEffect(() => {
    changeBg(false);
  }, [changeBg]);
  return <div>destination</div>;
}
