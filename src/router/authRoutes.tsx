import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import ForgotPassword from "@/pages/auth/forgotPassword";
import { RouteObject } from "./routeObjects";

const authRoutes: RouteObject[] = [
  {
    path: "/login",
    name: "login",
    element: <Login />,
  },
  {
    path: "/register",
    name: "register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    element: <ForgotPassword />,
  },
];

export default authRoutes;
