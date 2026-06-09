import { createContext, useEffect, useState } from "react";
import { loginRequest } from "../services/authService";

// ─── Mapeamento enum numérico do backend → string ────────────────────────────
// Domain.Enums.TipoUsuario: Instrutor=1, Aluno=2, Gestor=3, Administrador=4
const tipoUsuarioMap: Record<number, string> = {
  1: "Instrutor",
  2: "Aluno",
  3: "Gestor",
  4: "Administrador",
};

// ─── Types ────────────────────────────────────────────────────────────────────

export interface User {
  Id: string;
  TipoUsuario: string;      // "Gestor" | "Instrutor" | "Aluno" | "Administrador"
  IdAcademia: string | null; // preenchido após atualização do backend
  Flag: boolean;
  Nome: string | null;       // null até endpoint de perfil ser implementado
  AvatarUrl: string | null;  // null até endpoint de perfil ser implementado
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<User>;
  logout: () => void;
  updateUser: (user: User) => void;
}

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
