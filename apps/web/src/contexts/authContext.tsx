import { createContext, useEffect, useState } from "react";
import { loginRequest } from "../services/authService";

/* =======================
   TYPES
======================= */

export interface User {
  Id: string;
  Tipo: number;
  Flag: boolean;
}

interface LoginApiResponse {
  IdUsuario: string;
  TipoUsuario: number;
  Flag: boolean;
  Status: { Message: string; Code: number; Sucess: boolean };
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<User>;
  logout: () => void;
  updateUser: (user: User) => void;
}

/* =======================
   CONTEXT
======================= */

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

/* =======================
   PROVIDER
======================= */

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
    const data: LoginApiResponse = await loginRequest(email, password);

    const user: User = {
      Id: data.IdUsuario,
      Tipo: data.TipoUsuario,
      Flag: data.Flag,
    };

    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));

    return user;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  function updateUser(updatedUser: User) {
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loading, login, logout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}