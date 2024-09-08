import { RouteObject } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import { PathConstants } from "./constants";
import RouteGuard from "./route-guard";

const routes: RouteObject[] = [
  {
    path: PathConstants.ROOT,
    // element: <RouteGuard />,
    // children: [
    //   {
    element: <MainLayout />,
    children: [
      {
        path: PathConstants.OVERVIEW,
        element: <h1>OVERVIEW</h1>,
      },
      {
        path: PathConstants.ANALYSIS,
        element: <h1>Analysis</h1>,
      },
      {
        path: PathConstants.NOTIFICATIONS,
        element: <h1>Notifications</h1>,
      },
      {
        path: PathConstants.SETTINGS,
        element: <h1>Settings</h1>,
      },
    ],
  },
];
//   },
// ];
export { routes };
