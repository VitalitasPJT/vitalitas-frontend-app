import { createContext, useEffect, useState } from "react";
import { loginRequest } from "@/features/auth/services/authService";
import { tipoUsuarioMap } from "@/shared/constants/Roles";
import type { User, AuthContextType } from "@/shared/types/auth.ts";

// ─── Context ──────────────────────────────────────────────────────────────────

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  async function login(email: string, password: string): Promise<User> {
    const data = await loginRequest(email, password);
    // loginRequest já salvou Token e RefreshToken no localStorage

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
    localStorage.setItem("user", JSON.stringify(newUser));

    return newUser;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  }

  function updateUser(updatedUser: User) {
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}
