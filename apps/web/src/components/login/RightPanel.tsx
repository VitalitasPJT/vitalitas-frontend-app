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
    <div className="right-panel-4k relative flex h-full flex-1 items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-[#09090b] transition-colors duration-300">
      <RedBlurEffect />
      <BlueBlurEffect />
      <LoginForm />
    </div>
  );
}
