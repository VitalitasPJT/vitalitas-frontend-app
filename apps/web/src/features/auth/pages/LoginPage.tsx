import "./LoginPage.css";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import { ThemeToggle } from "@/shared/components/ui/TemasToggle";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#fafafa] dark:bg-[#09090b] transition-colors duration-300">
      <LeftPanel />
      <RightPanel />

      {/* Botão flutuante de tema */}
      <ThemeToggle variant="float" />
    </div>
  );
}
