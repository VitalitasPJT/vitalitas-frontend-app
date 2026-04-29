import LoginForm from "./LoginForm";

function RedBlurEffect() {
  return (
    <div className="pointer-events-none absolute -right-20 -top-40 h-96 w-96 rounded-full bg-[#ee2b47] opacity-10 blur-[50px]" />
  );
}

function BlueBlurEffect() {
  return (
    <div className="pointer-events-none absolute -bottom-20 -left-40 h-96 w-96 rounded-full bg-[#155dfc] opacity-10 blur-[128px]" />
  );
}

export default function RightPanel() {
  return (
    /*
      right-panel-4k: flex 40% em 4K — via LoginPage.css
      flex-1: divide o espaço igualmente com o LeftPanel por padrão
      h-full: herda h-screen do pai — sem min-h-screen próprio para não criar scroll
      overflow-hidden: efeitos de blur não vazam para fora do painel
    */
    <div className="right-panel-4k relative flex h-full flex-1 items-center justify-center overflow-hidden bg-[#fafafa]">
      <RedBlurEffect />
      <BlueBlurEffect />
      <LoginForm />
    </div>
  );
}
