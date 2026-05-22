import "../../components/login/LoginPage.css";
import LeftPanel from "../../components/login/LeftPanel";
import RightPanel from "../../components/login/RightPanel";
import { ThemeToggle } from "../../components/UI/ThemeToggle";

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
