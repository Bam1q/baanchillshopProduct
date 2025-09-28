import { lazy } from "react";
import { useRoutes, type RouteObject } from "react-router-dom";

const Home = lazy(() => import("../pages/HomePage/homepage"));
const LoginUser = lazy(() => import("../pages/LoginPage/loginUser"));

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/user/login", element: <LoginUser /> },
  { path: "*", element: <h1>404 Not Found</h1> },
];

export default function ConfigRoutes() {
  return useRoutes(routes);
}
