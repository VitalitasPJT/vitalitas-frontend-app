import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/shared/hooks/useAuth";

interface RoleRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

export function RoleRoute({ children, allowedRoles }: RoleRouteProps) {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) return <div>Carregando...</div>;

  if (!isAuthenticated || !user) {
    return <Navigate to="/vitalitas/user/login" replace />;
  }

  if (user.Flag) {
    return <Navigate to="/vitalitas/user/resetpassword" replace />;
  }

  if (!allowedRoles.includes(user.TipoUsuario)) {
    // Redireciona para a tela de erro 403 com contexto
    return <Navigate to="/erro/403" replace />;
  }

  return <>{children}</>;
}
