import React from "react";
import { useLocation } from "react-router-dom";
import Tabbar from "./tabBar";
import renderRoutes from "@/router/routeObjects";

console.log(renderRoutes);

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const currentRoute = renderRoutes.find((route) => route.path === pathname);

  return (
    <div className="w-screen h-screen flex flex-col bg-dark_bg">
      <div className="flex-1 overflow-y-scroll">{children}</div>
      {currentRoute?.meta?.showTabbar && <Tabbar />}
    </div>
  );
};

export default MainLayout;
