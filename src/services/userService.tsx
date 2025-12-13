import { api } from "./apiURL";

export async function resetPassword(
    id: number,
    newPassword: string
): Promise<void> {
    await api.put("/user/resetpassword", {
        id,
        newPassword,
    });
}
