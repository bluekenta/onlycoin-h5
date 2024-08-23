import React from "react";
import { useLocation } from "react-router-dom";
import renderRoutes from "@/router/routeObjects";
import Navbar from "./navbar";
import Header from "./header";
import classnames from "classnames";
import styles from "./style.module.scss";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const currentRoute = renderRoutes.find((route) => route.path === pathname);

  return (
    <div className="w-screen h-[100vh] flex flex-col bg-black relative text-white">
      <div
        className={classnames(
          styles["radial-bg"],
          "w-[255px] h-[184px] absolute blur-[45px] bg-[#9fe870] rounded-full -top-[67px] -left-[90px]  opacity-20"
        )}
      ></div>
      <div
        className={classnames(
          styles["radial-bg"],
          "w-[205px] h-[184px] absolute  blur-[45px] bg-[#9fe870] rounded-full -top-[27px] left-[181px]  opacity-20"
        )}
      ></div>
      <Header />
      <main className="flex-1 overflow-y-scroll">{children}</main>
      {currentRoute?.meta?.showNavbar && <Navbar />}
    </div>
  );
};

export default MainLayout;
