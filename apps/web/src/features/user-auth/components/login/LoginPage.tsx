import "./LoginPage.css";
import LeftPanel from '../../components/login/LeftPanel';
import RightPanel from '../../components/login/RightPanel';

export default function LoginPage() {
  return (
    /*
      h-screen: define altura exata da viewport — necessário para os filhos
      usarem h-full e a imagem de fundo preencher corretamente
      overflow-hidden: evita scroll causado pelos blur effects do RightPanel
      Não usar classe CSS customizada aqui — tudo via Tailwind
    */
    <div className="flex h-screen w-full overflow-hidden bg-[#fafafa]">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}
