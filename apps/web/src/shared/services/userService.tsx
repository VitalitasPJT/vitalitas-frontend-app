import { api } from "./apiURL";

// ─── Senha ────────────────────────────────────────────────────────────────────

export async function resetPassword(id: string, newPassword: string): Promise<void> {
  await api.put("/aluno/trocar-senha", {
    IdUsuario: id,
    NovaSenha: newPassword,
  });
}
