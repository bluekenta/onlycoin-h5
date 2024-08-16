import React from "react";
import { useLocation } from "react-router-dom";
import Tabbar from "./tabBar";
import renderRoutes from "@/router/routeObjects";
import Navbar from "./navBar";

console.log(renderRoutes);

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const currentRoute = renderRoutes.find((route) => route.path === pathname);

  return (
    <div className="w-screen h-screen flex flex-col bg-[url('@/assets/layout/layout-bg-light.png')] bg-cover dark:bg-gradient-to-b from-[rgba(14,23,64,1)] to-[rgba(1,5,32,1)]">
      {currentRoute?.meta?.showNavbar && (
        <Navbar
          title={currentRoute.meta.title}
          goBackUrl={currentRoute.meta.goBackUrl}
          showNavBar={currentRoute.meta.showNavbar}
          hasBack={currentRoute.meta.hasBack}
          icon={currentRoute.meta.icon}
        />
      )}
      <div className="flex-1 overflow-y-scroll">{children}</div>
      {currentRoute?.meta?.showTabbar && <Tabbar />}
    </div>
  );
};

export default MainLayout;
