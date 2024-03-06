import { createBrowserRouter } from "react-router-dom";
import Header from "../pages/header";
import Home from "../pages/home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
