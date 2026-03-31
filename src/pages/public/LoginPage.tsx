import LeftPanel from '../../components/login/LeftPanel';
import RightPanel from '../../components/login/RightPanel';

export default function LoginPage() {
    return (
        <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Login Screen 2.0">
      <div className="bg-[#fafafa] h-[1080px] relative shrink-0 w-full" data-name="div">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
    );
}
