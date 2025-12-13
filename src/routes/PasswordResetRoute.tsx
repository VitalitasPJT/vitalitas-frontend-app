import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function PasswordResetRoute({ children }: Props) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/vitalitas/user/login" replace />;
  }

  if (!user.SenhaFlag) {
    switch (user.Tipo) {
      case "Aluno":
        return <Navigate to="/user/aluno" replace />;
      case "Professor":
        return <Navigate to="/user/professor" replace />;
      case "Administrador":
        return <Navigate to="/user/admin" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
}
