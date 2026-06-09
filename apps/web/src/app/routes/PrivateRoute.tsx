import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading, user } = useAuth();

  if (loading) return <div>Carregando...</div>;

  if (!isAuthenticated || !user) {
    return <Navigate to="/vitalitas/user/login" replace />;
  }

  if (user.Flag) {
    return <Navigate to="/vitalitas/user/resetpassword" replace />;
  }

  return <>{children}</>;
}
