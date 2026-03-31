import "./LoginPage.css";
import LeftPanel from '../../components/login/LeftPanel';
import RightPanel from '../../components/login/RightPanel';

export default function LoginPage() {
  return (
    <div className="login-page">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}
