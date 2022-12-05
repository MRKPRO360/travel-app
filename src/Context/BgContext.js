import React, { useState } from "react";
const BgContext = React.createContext();
export default BgContext;

export function BgProvider({ children }) {
  const [bg, setBg] = useState(true);

  const changeBg = function (value) {
    if (value) setBg(true);
    else setBg(false);
  };

  return (
    <BgContext.Provider value={{ bg, changeBg }}>{children}</BgContext.Provider>
  );
}
