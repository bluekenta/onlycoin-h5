import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import renderRoutes from "./routeObjects";
import AuthGuard from "@/layout/authGuard";
import Layout from "@/layout";
import authRoutes from "./authRoutes";
import NotFound from "@/pages/404";

const RouteProvider: React.FC = () => {
  return (
    <Router>
      <Routes>
        {renderRoutes.map(({ path, element, meta }) => (
          <Route
            key={path}
            path={path}
            element={
              <AuthGuard noAuth={meta?.noAuth}>
                <Layout>{element}</Layout>
              </AuthGuard>
            }
          />
        ))}
        {authRoutes.map(({ path, element, meta }) => (
          <Route
            key={path}
            path={path}
            element={
              <AuthGuard authRoute={meta?.authRoute}>
                <Layout>{element}</Layout>
              </AuthGuard>
            }
          />
        ))}
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default RouteProvider;
