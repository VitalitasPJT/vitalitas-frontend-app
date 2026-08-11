import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthGuardStatus } from "@/shared/hooks/useAuthGuardStatus";
import { LoadingScreen } from "@/shared/components/ui/LoadingScreen";
import { RoleRoutes } from "@/shared/constants/Roles";

interface Props {
  children: ReactNode;
}

/**
 * Espelho de PrivateRoute/RoleRoute: aqui só entra quem TEM Flag true
 * (senha provisória pendente). Quem já trocou a senha ("ready") é mandado
 * de volta pra rota do próprio papel — mesma lógica de RoleRoutes já usada
 * em PrivateRoute/AuthContext.
 */
export function PasswordResetRoute({ children }: Props) {
  const guard = useAuthGuardStatus();

  switch (guard.status) {
    case "loading":
      return <LoadingScreen />;
    case "unauthenticated":
      return <Navigate to="/vitalitas/user/login" replace />;
    case "needsPasswordReset":
      return <>{children}</>;
    case "ready":
      return <Navigate to={RoleRoutes[guard.user.TipoUsuario] ?? "/"} replace />;
  }
}
