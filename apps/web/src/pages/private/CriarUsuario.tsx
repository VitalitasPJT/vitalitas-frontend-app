import { Sidebar } from '../../components/gestor/dashboard/SideBar';
import { Header } from '../../components/gestor/dashboard/Header';
import { StepIndicator } from '../../components/gestor/criarusuario/StepIndicator';
import { UserForm } from '../../components/gestor/criarusuario/UserForm';

export default function App() {
  const steps = [
    {
      number: 1,
      title: 'Etapa 1',
      subtitle: 'Informações Básicas',
      isActive: true,
      isCompleted: false
    },
    {
      number: 2,
      title: 'Etapa 2',
      subtitle: 'Detalhes do Perfil',
      isActive: false,
      isCompleted: false
    },
    {
      number: 3,
      title: 'Etapa 3',
      subtitle: 'Confirmação',
      isActive: false,
      isCompleted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <Header />

      <main className="ml-[88px] pt-[109px] p-8">
        <div className="max-w-7xl mx-auto py-12">
          <StepIndicator steps={steps} />
          <UserForm />
        </div>
      </main>
    </div>
  );
}