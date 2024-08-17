import React from "react";
import { useLocation } from "react-router-dom";
import renderRoutes from "@/router/routeObjects";
import Navbar from "./navbar";
import Header from "./header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const currentRoute = renderRoutes.find((route) => route.path === pathname);

  return (
    <div className="w-screen h-[100vh] flex flex-col bg-dark_bg">
      <Header />
      <main className="flex-1 overflow-y-scroll">{children}</main>
      {currentRoute?.meta?.showNavbar && <Navbar />}
    </div>
  );
};

export default MainLayout;
