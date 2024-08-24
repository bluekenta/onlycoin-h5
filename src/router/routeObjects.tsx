import Account from "@/pages/account";
import Earn from "@/pages/earn";
import Home from "@/pages/home";
import Manage from "@/pages/manage";

export interface RouteObject {
  path: string;
  name: string;
  element?: React.ReactNode;
  meta?: {
    title: string;
    showNavbar?: boolean;
    noAuth?: boolean;
    goBackUrl?: string;
    hasBack?: boolean;
    icon?: string;
    authRoute?: boolean;
  };
  children?: RouteObject[];
}

export const routeObjects: RouteObject[] = [
  {
    path: "/",
    name: "home",
    element: <Home />,
    meta: { title: "home", showNavbar: true },
  },
  {
    path: "/account",
    name: "account",
    element: <Account />,
    meta: { title: "account", showNavbar: true },
  },
  {
    path: "/earn",
    name: "earn",
    element: <Earn />,
    meta: { title: "earn", showNavbar: true },
  },
  {
    path: "/manage",
    name: "manage",
    element: <Manage />,
    meta: { title: "manage", showNavbar: true },
  },
];

const generateRoutes = (routeObject: RouteObject) => {
  const routes: RouteObject[] = [];
  const parentPath = routeObject.path;
  if (routeObject.children && routeObject.children.length > 0) {
    routeObject.children.forEach((childRoute) => {
      routes.push(
        ...generateRoutes({
          ...childRoute,
          path:
            parentPath +
            (parentPath[parentPath.length - 1] === "/"
              ? ""
              : childRoute.path
              ? "/"
              : "") +
            childRoute.path,
        })
      );
    });
  } else {
    routes.push(routeObject);
  }
  return routes;
};

const renderRoutes: RouteObject[] = [];

routeObjects.forEach((routeObject) => {
  renderRoutes.push(...generateRoutes(routeObject));
});

export default renderRoutes;
