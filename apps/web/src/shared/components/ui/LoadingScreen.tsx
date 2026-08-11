interface LoadingScreenProps {
  label?: string;
}

/**
 * Tela de carregamento usada pelos guards de rota (PrivateRoute, RoleRoute,
 * PasswordResetRoute) enquanto o AuthContext ainda está lendo o usuário do
 * localStorage. Antes cada guard tinha o próprio <div>Carregando...</div>
 * sem token de cor nenhum, e um deles (PasswordResetRoute) nem tinha essa
 * tela — retornava `null`. Unificado aqui.
 */
export function LoadingScreen({ label = "Carregando..." }: LoadingScreenProps) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-surface">
      <p className="text-sm font-medium text-body">{label}</p>
    </div>
  );
}
