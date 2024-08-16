import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import { RouteObject } from "./routeObjects";

const authRoutes: RouteObject[] = [
  {
    path: "/login",
    name: "login",
    element: <Login />,
    meta: { title: "Login", authRoute: true },
  },
  {
    path: "/register",
    name: "register",
    element: <Register />,
    meta: { title: "Register", authRoute: true },
  },
];

export default authRoutes;
