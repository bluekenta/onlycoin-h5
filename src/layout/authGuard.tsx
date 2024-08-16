import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AuthGuardProps {
  children: React.ReactNode;
  noAuth?: boolean;
}

/**
 * 认证路由
 * @param children  子组件
 * @param auth  是否需要认证
 * @constructor 认证路由组件
 */
const AuthGuard: React.FC<AuthGuardProps> = ({ children, noAuth }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // 或者其他认证令牌的获取方式
  const isAuthenticated = Boolean(token); // 认证逻辑

  useEffect(() => {
    // if (!noAuth && !isAuthenticated) {
    //   navigate("/login"); // 如果未认证且路由需要认证，则重定向到登录
    // }
  }, [noAuth, isAuthenticated, navigate]);

  return <>{children}</>;
};

export default AuthGuard;
