export interface FormState {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  cpf: string;
  nascimento: string;
  perfil: string;
  quadra: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

export interface FormErrors {
  nome?: string;
  email?: string;
  senha?: string;
  telefone?: string;
  cpf?: string;
  nascimento?: string;
  perfil?: string;
  rua?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
}