import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginRequest } from "../services/authService";

interface User {
  IdUsuario: string;
  TipoUsuario: number;
  Flag: boolean;
}

interface LoginData {
  IdUsuario: string;
  TipoUsuario: number;
  Flag: boolean;
  Token: string;
  RefreshToken: string;
}

interface AuthContextData {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<LoginData>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoredData() {
      const storedUser = await AsyncStorage.getItem("@user");
      const storedToken = await AsyncStorage.getItem("@token");

      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    }
    loadStoredData();
  }, []);

  async function signIn(email: string, password: string): Promise<LoginData> {
    const data = await loginRequest(email, password);

    await AsyncStorage.setItem("@token", data.Token);
    await AsyncStorage.setItem("@refreshToken", data.RefreshToken);
    await AsyncStorage.setItem(
      "@user",
      JSON.stringify({
        IdUsuario: data.IdUsuario,
        TipoUsuario: data.TipoUsuario,
        Flag: data.Flag,
      })
    );

    setUser({
      IdUsuario: data.IdUsuario,
      TipoUsuario: data.TipoUsuario,
      Flag: data.Flag,
    });

    return data;
  }

  async function signOut() {
    await AsyncStorage.multiRemove(["@token", "@refreshToken", "@user"]);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}