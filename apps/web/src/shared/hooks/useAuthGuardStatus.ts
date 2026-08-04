import { useAuth } from "@/shared/hooks/useAuth";
import type { User } from "@/shared/types/auth.ts";

export type AuthGuardStatus =
  | { status: "loading" }
  | { status: "unauthenticated" }
  | { status: "needsPasswordReset"; user: User }
  | { status: "ready"; user: User };

/**
 * Centraliza a parte do estado de auth que era idêntica nos três guards de
 * rota (PrivateRoute, RoleRoute, PasswordResetRoute): esperar o `loading`
 * do AuthContext, checar autenticação, e checar `user.Flag` (senha
 * provisória pendente). Antes essas três checagens estavam copiadas e
 * coladas em cada guard — inclusive um deles (PasswordResetRoute) tinha
 * esquecido de checar `loading`, o que causava um bug de corrida real (ver
 * histórico da revisão).
 *
 * Cada guard continua decidindo o que fazer em cada status — para onde
 * navegar, e o que checar a mais (ex.: allowedRoles em RoleRoute). Só a
 * base fica compartilhada aqui, então o bug de esquecer o `loading` não
 * pode mais acontecer de novo em um guard novo.
 */
export function useAuthGuardStatus(): AuthGuardStatus {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) return { status: "loading" };
  if (!isAuthenticated || !user) return { status: "unauthenticated" };
  if (user.Flag) return { status: "needsPasswordReset", user };

  return { status: "ready", user };
}
