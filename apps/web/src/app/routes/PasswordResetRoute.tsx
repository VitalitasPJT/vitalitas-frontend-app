import { Navigate } from "react-router-dom";
import { useAuth } from "@/shared/hooks/useAuth";
import type { ReactNode } from "react";
import { RoleRoutes } from "@/shared/constants/Roles";

interface Props {
  children: ReactNode;
}

export function PasswordResetRoute({ children }: Props) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/vitalitas/user/login" replace />;
  }

  if (!user.Flag) {
    return <Navigate to={RoleRoutes[user.TipoUsuario] ?? "/"} replace />;  
  }

  return <>{children}</>;
}