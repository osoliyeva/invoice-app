import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayouts from "./layouts/RootLayouts";
import Home from "./pages/Home";
import Details from "./pages/Details";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayouts />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
        {
          path: "/details/:id",
          element: <Details />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
