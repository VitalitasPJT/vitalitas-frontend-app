import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginRequest } from "../services/authService";

export interface User {
  Id: string;
  Tipo: number;
  Flag: boolean;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<User>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  useEffect(() => {
    async function loadUser() {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  async function login(email: string, password: string): Promise<User> {
    const data = await loginRequest(email, password);

    const user: User = {
      Id: data.IdUsuario,
      Tipo: data.TipoUsuario,
      Flag: data.Flag,
    };

    setUser(user);
    await AsyncStorage.setItem("user", JSON.stringify(user));
    return user;
  }

  async function logout() {
    setUser(null);
    await AsyncStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}