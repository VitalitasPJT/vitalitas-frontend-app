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
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}
