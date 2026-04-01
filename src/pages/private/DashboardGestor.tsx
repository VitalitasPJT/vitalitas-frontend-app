import { Header } from "../../components/gestor/dashboard/Header";
import { StatsCards } from "../../components/gestor/dashboard/StatsCards";
import { SearchFilter } from "../../components/gestor/dashboard/SearchFilter";
import { UsersTable } from "../../components/gestor/dashboard/UsersTable";
import { Sidebar } from "../../components/gestor/dashboard/SideBar";
import { MobileHeader } from "../../components/gestor/dashboard/MobileHeader";

export default function App() {
  return (
    <div className="flex min-h-screen bg-[#e5e5e5]">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <MobileHeader title="Usuários" />
        <div className="max-w-[1500px] mx-auto p-4 lg:p-8">
          <Header />
          <StatsCards />
          <SearchFilter />
          <UsersTable />
        </div>
      </main>
    </div>
  );
}