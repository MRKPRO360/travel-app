import router from "./Routes/router";
import { RouterProvider } from "react-router-dom";
import { BgProvider } from "./Context/BgContext";
import { Toaster } from "react-hot-toast";
import { SkeletonTheme } from "react-loading-skeleton";
// import Demo from "./Pages/Demo";

function App() {
  return (
    <BgProvider>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <RouterProvider router={router} />
        <Toaster />
      </SkeletonTheme>
    </BgProvider>
  );
}

export default App;
