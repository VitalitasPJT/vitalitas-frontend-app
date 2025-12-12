import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

interface RoleRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

export function RoleRoute({ children, allowedRoles }: RoleRouteProps) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/erro/401" replace />;
  }

  if (!allowedRoles.includes(user.Tipo)) {
    return <Navigate to="/erro/403" replace />;
  }

  return <>{children}</>;
}
