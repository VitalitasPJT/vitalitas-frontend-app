import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginRequest, refreshRequest } from "../services/authService";

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
  signIn: (email: string, password: string, rememberMe: boolean) => Promise<LoginData>;
  signOut: () => Promise<void>;
  updateUserFlag: (flag: boolean) => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoredData() {
      const rememberMe = await AsyncStorage.getItem("@rememberMe");
      const storedToken = await AsyncStorage.getItem("@token");
      const storedRefreshToken = await AsyncStorage.getItem("@refreshToken");
      const storedUser = await AsyncStorage.getItem("@user");

      // Se não marcou "lembrar-me", não tenta manter sessão
      if (rememberMe !== "true" || !storedRefreshToken) {
        await AsyncStorage.multiRemove(["@token", "@refreshToken", "@user"]);
        setLoading(false);
        return;
      }

      if (storedUser && storedToken) {
        try {
          // Tenta renovar o token pra garantir que ainda é válido
          const data = await refreshRequest(storedToken, storedRefreshToken);
          console.log("✅ Renovado na abertura do app!", data);

          await AsyncStorage.setItem("@token", data.AccessToken);
          await AsyncStorage.setItem("@refreshToken", data.RefreshToken);

          setUser(JSON.parse(storedUser));
        } catch (err) {
          console.log("❌ Erro ao renovar token na abertura do app:", err);
          // Refresh token expirado (passou de 7 dias) ou inválido
          await AsyncStorage.multiRemove(["@token", "@refreshToken", "@user", "@rememberMe"]);
        }
      }

      setLoading(false);
    }
    loadStoredData();
  }, []);

  async function signIn(email: string, password: string, rememberMe: boolean): Promise<LoginData> {
    const data = await loginRequest(email, password);

    await AsyncStorage.setItem("@token", data.Token);
    await AsyncStorage.setItem("@refreshToken", data.RefreshToken);
    await AsyncStorage.setItem("@rememberMe", rememberMe ? "true" : "false");
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

  async function updateUserFlag(flag: boolean) {
    if (!user) return;

    const updatedUser = { ...user, Flag: flag };
    setUser(updatedUser);

    await AsyncStorage.setItem("@user", JSON.stringify(updatedUser));
  }

  async function signOut() {
    await AsyncStorage.multiRemove(["@token", "@refreshToken", "@user", "@rememberMe"]);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, updateUserFlag }}>
      {children}
    </AuthContext.Provider>
  );
}