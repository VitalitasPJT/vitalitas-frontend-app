import "./LoginPage.css";
import LeftPanel from "../../components/login/LeftPanel";
import RightPanel from "../../components/login/RightPanel";

export default function LoginPage() {
  return (
    // h-screen + overflow-hidden no pai: altura exata da tela, sem scroll
    // flex: os dois painéis ficam lado a lado e dividem o espaço
    <div className="flex h-screen w-full overflow-hidden bg-[#fafafa]">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}
