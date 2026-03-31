import LoginForm from "./LoginForm";

function RedBlurEffect() {
  return <div className="absolute bg-[#ee2b47] blur-[50px] left-[550.5px] opacity-10 rounded-[33554400px] size-[384px] top-[-160px]" data-name="Container" />;
}

function BlueBlurEffect() {
  return <div className="absolute bg-[#155dfc] blur-[128px] left-[-160px] opacity-10 rounded-[33554400px] size-[384px] top-[720px]" data-name="Container" />;
}

export default function RightPanel() {
  return (
    <div className="absolute h-[1080px] left-[960px] overflow-clip top-0 w-[960px]" data-name="Container">
      <RedBlurEffect />
      <BlueBlurEffect />
      <LoginForm />
    </div>
  );
}
