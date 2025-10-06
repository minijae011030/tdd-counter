import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [{ index: true, element: <Home /> }],
  },
]);
