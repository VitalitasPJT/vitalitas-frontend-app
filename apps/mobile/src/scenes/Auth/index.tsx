import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "./../../store/useAuth";
import { Ionicons } from "@expo/vector-icons";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function LoginScreen() {
  const { signIn, signOut } = useAuth();
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
      const user = await signIn(email, password);

      if (user.TipoUsuario !== 2) {
        await signOut();
        setPasswordError("Acesso não permitido para este tipo de usuário.");
        return;
      }

      if (user.Flag === true) {
        router.replace("/resetpassword");
        return;
      }

      router.replace("/aluno");
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
        <Input
          icon="mail-outline"
          hasError={!!emailError}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      </View>

      {/* Campo Senha */}
      <View style={styles.inputWrapper}>
        <Input
          icon="lock-closed-outline"
          hasError={!!passwordError}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          rightElement={
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#18181b"
              />
            </TouchableOpacity>
          }
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      </View>

      {/* Botão Login */}
      <Button label="LOGIN" loading={loading} onPress={handleSubmit} />
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
  errorText: {
    fontSize: 13,
    color: "#ee2b47",
    paddingLeft: 4,
  },
});