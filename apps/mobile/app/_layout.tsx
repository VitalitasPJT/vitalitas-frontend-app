import { Slot } from "expo-router";
import { AuthProvider } from "../src/store/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}