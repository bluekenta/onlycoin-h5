import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import renderRoutes from "./routeObjects";
import AuthGuard from "@/layout/authGuard";
import MainLayout from "@/layout";
import authRoutes from "./authRoutes";
import AuthLayout from "@/layout/authLayout";
import NotFound from "@/pages/404";

const RouteeProvider: React.FC = () => {
  return (
    <Router>
      <Routes>
        {renderRoutes.map(({ path, element, meta }) => (
          <Route
            key={path}
            path={path}
            element={
              <AuthGuard noAuth={meta?.noAuth}>
                <MainLayout>{element}</MainLayout>
              </AuthGuard>
            }
          />
        ))}
        {authRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<AuthLayout>{element}</AuthLayout>}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RouteeProvider;
