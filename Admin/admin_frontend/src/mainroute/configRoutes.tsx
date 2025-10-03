import { lazy } from "react";
import { useRoutes, type RouteObject } from "react-router-dom";

const Login = lazy(() => import("../pages/Login/LoginAdmin"));


const routes: RouteObject[] = [
  { path: "/", element: <Login /> },
  { path: "/user/login", element: <Login /> },

  { path: "*", element: <h1>404 Not Found</h1> },
];

export default function ConfigRoutes() {
  return useRoutes(routes);
}
