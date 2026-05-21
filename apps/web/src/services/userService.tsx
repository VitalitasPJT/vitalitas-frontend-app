import { api } from "./apiURL";

export async function resetPassword(
    id: string,
    newPassword: string
): Promise<void> {
    await api.put("/aluno/trocar-senha", {
        IdUsuario: id,
        NovaSenha: newPassword,
    });
}

export async function criarAluno(data: Record<string, unknown>) {
    const response = await api.post("/gestor/criar-usuario", data);
    return response.data;
    }
    
/* Aguardando implementação do backend

export async function criarInstrutor(data: Record<string, unknown>) {
     const response = await api.post("/gestor/criar-instrutor", data);
    return response.data;
}

export async function criarGestor(data: Record<string, unknown>) {
    const response = await api.post("/gestor/criar-gestor", data);
    return response.data;
}
export async function criarUsuario(data: Record<string, unknown>) {
    const response = await api.post("/gestor/criar-usuario", data);
    return response.data;
}

*/