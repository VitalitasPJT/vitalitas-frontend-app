import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthGuardStatus } from "@/shared/hooks/useAuthGuardStatus";
import { LoadingScreen } from "@/shared/components/ui/LoadingScreen";

interface RoleRouteProps {
  children: ReactNode;
  allowedRoles: string[];
}

/**
 * Mesma base de PrivateRoute (useAuthGuardStatus), com a checagem extra de
 * allowedRoles no status "ready".
 */
export function RoleRoute({ children, allowedRoles }: RoleRouteProps) {
  const guard = useAuthGuardStatus();

  switch (guard.status) {
    case "loading":
      return <LoadingScreen />;
    case "unauthenticated":
      return <Navigate to="/vitalitas/user/login" replace />;
    case "needsPasswordReset":
      return <Navigate to="/vitalitas/user/resetpassword" replace />;
    case "ready":
      if (!allowedRoles.includes(guard.user.TipoUsuario)) {
        return <Navigate to="/erro/403" replace />;
      }
      return <>{children}</>;
  }
}
