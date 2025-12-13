import { useContext } from "react";
import { AuthContext } from "../contexts/authContext.tsx";
import type { AuthContextType } from "../contexts/authContext.tsx";

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }

  return context;
}
