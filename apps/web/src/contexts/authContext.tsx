import { createContext, useEffect, useState } from "react";
import { loginRequest } from "@/features/auth/services/authService";
import { tipoUsuarioMap } from "@/shared/constants/Roles";
import { getAuthItem, setAuthItem, clearAuthItems } from "@/shared/services/tokenStorage";
import type { User, AuthContextType } from "@/shared/types/auth.ts";

// ─── Context ──────────────────────────────────────────────────────────────────

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ─── Provider ─────────────────────────────────────────────────────────────────

/**
 * As 4 leituras/escritas diretas de localStorage.getItem/setItem("user", ...)
 * viraram getAuthItem/setAuthItem, que respeitam o storage escolhido no
 * login (localStorage se "lembrar-me" marcado, sessionStorage se não —
 * ver shared/services/tokenStorage.ts). login() agora recebe rememberMe e
 * repassa pra loginRequest, que é quem decide o storage do token.
 *
 * IMPORTANTE: a assinatura de `login` em AuthContextType (shared/types/auth.ts)
 * também precisa mudar para `(email: string, password: string, rememberMe: boolean) => Promise<User>`.
 * Não tenho esse arquivo neste momento — só ajustar essa linha lá resolve.
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  useEffect(() => {
    const storedUser = getAuthItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  async function login(email: string, password: string, rememberMe: boolean): Promise<User> {
    const data = await loginRequest(email, password, rememberMe);
    // loginRequest já salvou Token e RefreshToken no storage correto

    const tipoStr = tipoUsuarioMap[Number(data.TipoUsuario)];
    if (!tipoStr) {
      throw new Error(`TipoUsuario desconhecido: ${data.TipoUsuario}`);
    }

    const newUser: User = {
      Id: data.IdUsuario,
      TipoUsuario: tipoStr,
      // IdAcademia vem do backend após atualização do LoginResponse
      // Para Instrutor/Aluno virá como "00000000-0000-0000-0000-000000000000" ou null
      IdAcademia: data.IdAcademia ?? null,
      Flag: data.Flag,
      // ─────────────────────────────────────────────────────────────
      // TODO: quando GET /usuario/:id/perfil estiver pronto:
      //   const profile = await fetchUserProfile(data.IdUsuario);
      //   Nome: profile.Nome,
      //   AvatarUrl: profile.AvatarUrl,
      // ─────────────────────────────────────────────────────────────
      Nome: null,
      AvatarUrl: null,
    };

    setUser(newUser);
    setAuthItem("user", JSON.stringify(newUser));

    return newUser;
  }

  function logout() {
    setUser(null);
    clearAuthItems(["user", "token", "refreshToken"]);
  }

  function updateUser(updatedUser: User) {
    setUser(updatedUser);
    setAuthItem("user", JSON.stringify(updatedUser));
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}
