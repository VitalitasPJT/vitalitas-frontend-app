import { api } from "./apiURL";

export async function resetPassword(
    id: string,
    newPassword: string
): Promise<void> {
    await api.put("/user/trocar-senha", {
        IdUsuario: id,
        NovaSenha: newPassword,
    });
}