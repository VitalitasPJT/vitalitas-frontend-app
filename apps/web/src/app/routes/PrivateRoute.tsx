import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthGuardStatus } from "@/shared/hooks/useAuthGuardStatus";
import { LoadingScreen } from "@/shared/components/ui/LoadingScreen";

interface Props {
  children: ReactNode;
}

/**
 * Checagem de loading/autenticação/Flag extraída para useAuthGuardStatus
 * (compartilhado com RoleRoute e PasswordResetRoute). Este guard só decide
 * o que fazer em cada status: usuário com senha provisória pendente
 * (Flag true) é mandado para a troca de senha, não para dentro da área
 * privada.
 */
export function PrivateRoute({ children }: Props) {
  const guard = useAuthGuardStatus();

  switch (guard.status) {
    case "loading":
      return <LoadingScreen />;
    case "unauthenticated":
      return <Navigate to="/vitalitas/user/login" replace />;
    case "needsPasswordReset":
      return <Navigate to="/vitalitas/user/resetpassword" replace />;
    case "ready":
      return <>{children}</>;
  }
}
