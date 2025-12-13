import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { loginRequest } from "../services/authService";

/* =======================
   TYPES
======================= */

export interface User {
  Id: number;
  Tipo: "Aluno" | "Administrador" | "Professor";
  SenhaFlag: boolean;
}

interface LoginApiResponse {
  response: User;
  token: string;
}

interface JwtPayload {
  exp: number;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<User>;
  logout: () => void;
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
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user && !!token;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (!storedUser || !storedToken) {
      logout();
      return;
    }

    try {
      const decoded = jwtDecode<JwtPayload>(storedToken);

      if (decoded.exp * 1000 < Date.now()) {
        logout();
        setLoading(false);
        return;
      }

      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    } catch {
      logout();
    } finally {
        setLoading(false);
    }
  }, []);

  async function login(email: string, password: string): Promise<User> {
    const data: LoginApiResponse = await loginRequest(email, password);

    const { response: user, token } = data;

    setUser(user);
    setToken(token);

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);

    return user;
  }

  function logout() {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
