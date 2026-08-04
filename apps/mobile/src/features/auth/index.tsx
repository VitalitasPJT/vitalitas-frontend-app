import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
} from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../../store/useAuth";
import { Ionicons } from "@expo/vector-icons";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const { signIn } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const isFormValid = email.trim().length > 0 && password.trim().length > 0;
  const [generalError, setGeneralError] = useState("");

  async function handleSubmit() {
    Keyboard.dismiss();
    setEmailError("");
    setPasswordError("");
    setGeneralError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Digite um e-mail com formato válido.");
      return;
    }

    try {
      setLoading(true);
      const user = await signIn(email, password, rememberMe);

      await AsyncStorage.setItem("@rememberMe", rememberMe ? "true" : "false");

      if (user.Flag === true) {
        router.replace("/resetpassword");
        return;
      }

      const roleRoutes: Record<number, string> = {
        2: "/aluno",
      };

      router.replace(roleRoutes[user.TipoUsuario] ?? "/");
    } catch (err: any) {
      console.log("Erro no login:", err);

      if (!err.response) {
        setGeneralError("Não foi possível conectar. Verifique sua internet e tente novamente.");
      } else if (err.response.status === 401 || err.response.status === 403) {
        setGeneralError("Email ou senha inválidos.");
      } else if (err.response.status >= 500) {
        setGeneralError("Ocorreu um erro no servidor. Tente novamente em instantes.");
      } else {
        setGeneralError("Não foi possível fazer login. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Logo / Marca */}
        <View style={styles.brand}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.brandTextWrapper}>
            <Text style={styles.brandTitle}>Vitalitas</Text>
            <View style={styles.brandUnderline} />
          </View>
        </View>

        {/* Texto de introdução */}
        <Text style={styles.intro}>
          Sua jornada para um estilo de vida mais saudável começa aqui.
          Conecte-se e alcance seus objetivos.
        </Text>

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

        {/* Lembrar-me / Esqueceu senha */}
        <View style={styles.optionsRow}>
          <TouchableOpacity
            style={styles.rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
            activeOpacity={0.7}
          >
            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
              {rememberMe && (
                <Ionicons name="checkmark" size={14} color="#fff" />
              )}
            </View>
            <Text style={styles.rememberMeText}>Lembrar-me</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/forgot-password")}>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        {generalError ? <Text style={styles.generalErrorText}>{generalError}</Text> : null}

        {/* Botão Login */}
        <Button
          label="LOGIN"
          loading={loading}
          onPress={handleSubmit}
          disabled={!isFormValid}
          style={{ marginTop: 8, opacity: isFormValid ? 1 : 0.5 }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingVertical: 24,
    gap: 16,
  },
  brand: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
  },
  logo: {
    width: 60,
    height: 60,
  },
  brandTextWrapper: {
    alignItems: "center",
    gap: 6,
  },
  brandTitle: {
    fontSize: 36,
    fontFamily: "Montserrat",
    fontWeight: "900",
    color: "#000",
  },
  brandUnderline: {
    width: 150,
    height: 4,
    backgroundColor: "#EE2B47",
    borderRadius: 999,
  },
  intro: {
    fontSize: 16,
    fontWeight: "300",
    color: "#000",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 8,
  },
  header: {
    marginTop: 30,
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
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rememberMe: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.11,
    borderColor: "rgba(0,0,0,0.3)",
    backgroundColor: "rgba(0,0,0,0.05)",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#EE2B47",
    borderColor: "#EE2B47",
  },
  rememberMeText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  forgotPassword: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  errorText: {
    fontSize: 13,
    color: "#ee2b47",
    paddingLeft: 4,
  },
  generalErrorText: {
    fontSize: 13,
    color: "#ee2b47",
    textAlign: "center",
    marginTop: -4,
  },
});