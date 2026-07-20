export interface User {
  Id: string;
  TipoUsuario: string;      // "Gestor" | "Instrutor" | "Aluno" | "Administrador"
  IdAcademia: string | null; // preenchido após atualização do backend
  Flag: boolean;
  Nome: string | null;       // null até endpoint de perfil ser implementado
  AvatarUrl: string | null;  // null até endpoint de perfil ser implementado
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<User>;
  logout: () => void;
  updateUser: (user: User) => void;
}
