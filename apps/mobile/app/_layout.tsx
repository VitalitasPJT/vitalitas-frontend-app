import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { AuthProvider } from "../src/store/AuthContext";
import { useAuth } from "../src/store/useAuth";

function RootNavigation() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (loading) return; // ainda carregando dados salvos, não faz nada ainda

    const roleRoutes: Record<number, string> = {
      2: "/aluno",
      // 1: "/instrutor",   // adicionar quando a tela existir
      // 3: "/gestor",      // adicionar quando a tela existir
      // 4: "/administrador", // adicionar quando a tela existir
    };

    if (user) {
      const currentRoute = "/" + segments.join("/");

      if (user.Flag === true) {
        if (currentRoute !== "/resetpassword") {
          router.replace("/resetpassword");
        }
        return;
      }

      const targetRoute = roleRoutes[user.TipoUsuario] ?? "/";

      // só redireciona se ainda estiver na tela de login/index
      if (currentRoute === "/" || currentRoute === "") {
        router.replace(targetRoute);
      }
    }
  }, [user, loading, segments, router]);

  if (loading) {
    return null; // pode trocar por uma tela de loading/splash depois
  }

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  );
}