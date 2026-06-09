import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function PasswordResetRoute({ children }: Props) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/vitalitas/user/login" replace />;
  }

  if (!user.Flag) {
    const roleRoutes: Record<number, string> = {
      1: "/user/instrutor",
      2: "/user/aluno",
      3: "/user/gestor",
      4: "/user/admin",
    };

    return <Navigate to={roleRoutes[user.Tipo] ?? "/"} replace />;
  }

  return <>{children}</>;
}