import { routes } from "./router/config";
import { ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes);
const App = (): ReactElement => {
  return <RouterProvider router={router} />;
};

export { App };
