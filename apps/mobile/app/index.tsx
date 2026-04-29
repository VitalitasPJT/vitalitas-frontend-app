import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../src/hooks/useAuth";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setEmailError("");
    setPasswordError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Digite um e-mail com formato válido.");
      return;
    }

    try {
      setLoading(true);
      const user = await login(email, password);

      if (user.Flag === true) {
        router.replace("/resetpassword");
        return;
      }

      const roleRoutes: Record<number, string> = {
        1: "/aluno",
      };

      router.replace(roleRoutes[user.Tipo] ?? "/");
    } catch (err) {
      setPasswordError("Email ou senha inválidos.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Conecte-se</Text>
        <Text style={styles.subtitle}>
          Faça login com seu e-mail para continuar
        </Text>
      </View>

      {/* Campo Email */}
      <View style={styles.inputWrapper}>
        <View style={[styles.inputContainer, emailError ? styles.inputError : null]}>
          <Ionicons name="mail-outline" size={20} color="#18181b" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#71717b"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      </View>

      {/* Campo Senha */}
      <View style={styles.inputWrapper}>
        <View style={[styles.inputContainer, passwordError ? styles.inputError : null]}>
          <Ionicons name="lock-closed-outline" size={20} color="#18181b" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#71717b"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#18181b"
            />
          </TouchableOpacity>
        </View>
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      </View>

      {/* Botão Login */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>LOGIN</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 32,
    gap: 16,
  },
  header: {
    marginBottom: 8,
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#18181b",
    textAlign: "center",
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "300",
    color: "#71717b",
    textAlign: "center",
  },
  inputWrapper: {
    gap: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderWidth: 2,
    borderColor: "#e4e4e7",
    borderRadius: 14,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    gap: 8,
  },
  inputError: {
    borderColor: "#ee2b47",
  },
  icon: {
    opacity: 0.4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#18181b",
  },
  errorText: {
    fontSize: 13,
    color: "#ee2b47",
    paddingLeft: 4,
  },
  button: {
    height: 60,
    backgroundColor: "#ee2b47",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    shadowColor: "#ee2b47",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
  },
});