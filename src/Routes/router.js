import { createBrowserRouter } from "react-router-dom";
import Destination from "../Pages/Destination";
import Home from "../Pages/Home";
import Main from "../Pages/Main";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Error from "../Pages/Error";
import Travel from "../Pages/Travel";
import Books from "../Pages/Books";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/travels/:id",
        loader: ({ params }) =>
          fetch(`https://new-travel-server.vercel.app/travels/${params.id}`),
        element: (
          <PrivateRoute>
            <Travel />
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:id",
        element: (
          <PrivateRoute>
            <Books />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
export default router;
