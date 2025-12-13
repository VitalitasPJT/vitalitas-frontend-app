import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface RoleRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

export function RoleRoute({ children, allowedRoles }: RoleRouteProps) {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/vitalitas/user/login" replace />;
  }

  if (!allowedRoles.includes(user.Tipo)) {
    return <Navigate to="/erro/403" replace />;
  }

  return <>{children}</>;
}
