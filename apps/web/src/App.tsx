import AppRoutes from "./app/routes/AppRoutes";
import { AuthProvider } from "./contexts/authContext";
import { ThemeProvider } from "./contexts/themeContext";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
  );
}
