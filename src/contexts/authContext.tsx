import { createContext, useContext, useState, useEffect } from "react";
import { loginRequest } from "../services/authService";

interface User {
    Id: number;
    Nome: string;
    Email: string;
    Tipo: "Aluno" | "Administrador" | "Professor";
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<User>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        try {
            const savedUser = localStorage.getItem("user");

            if (!savedUser || savedUser === "undefined" || savedUser === "null") {
                setUser(null);
                return;
            }

            setUser(JSON.parse(savedUser));

        } catch (err) {
            console.error("Erro ao carregar user do localStorage:", err);
            setUser(null);
        }
    }, []);

    async function login(email: string, password: string): Promise<User> {
        const data = await loginRequest(email, password);

        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));

        return data;
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth precisa estar dentro do AuthProvider");
    return context;
}