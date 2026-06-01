import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "./../../store/useAuth";
import { trocarSenhaRequest } from "./../../services/authService";
import Button from "../../components/Button";

export default function ResetPasswordScreen() {
  const router = useRouter();
  const { user, signOut } = useAuth();

  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [showNova, setShowNova] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const validacoes = {
    minimo8: novaSenha.length >= 8,
    maiuscula: /[A-Z]/.test(novaSenha) && /[a-z]/.test(novaSenha),
    especial: /[#$%&@!]/.test(novaSenha),
    numero: /[0-9]/.test(novaSenha),
  };

  const tudo_valido = Object.values(validacoes).every(Boolean);

  async function handleSalvar() {
    setErro("");

    if (!tudo_valido) {
      setErro("A senha não atende aos requisitos.");
      return;
    }

    if (novaSenha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    try {
      setLoading(true);
      await trocarSenhaRequest(user!.IdUsuario, novaSenha);
      router.replace("/aluno");
    } catch (err: any) {
      setErro("Erro ao salvar senha. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  function handleCancelar() {
    signOut();
    router.replace("/");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Ícone */}
      <View style={styles.iconCircle}>
        <Ionicons name="lock-closed" size={32} color="#fff" />
      </View>

      {/* Header */}
      <Text style={styles.title}>Primeiro Acesso</Text>
      <Text style={styles.subtitle}>
        Este é seu <Text style={styles.bold}>primeiro acesso</Text>. Digite uma{" "}
        <Text style={styles.bold}>nova senha</Text>, ela não pode ser igual à
        senha temporária.
      </Text>

      {/* Requisitos */}
      <View style={styles.requisitosBox}>
        <View style={styles.requisitosHeader}>
          <Ionicons name="shield-checkmark-outline" size={20} color="#EE2B47" />
          <Text style={styles.requisitosTitle}>A senha deve ter:</Text>
        </View>

        {[
          { label: "No mínimo 8 caracteres", ok: validacoes.minimo8 },
          { label: "Uma letra maiúscula e uma minúscula", ok: validacoes.maiuscula },
          { label: "Um caractere especial (ex.: #,$,%,&,@)", ok: validacoes.especial },
          { label: "Um número (ex.: 1,2,3)", ok: validacoes.numero },
        ].map((item, i) => (
          <View key={i} style={styles.requisitosItem}>
            <View
              style={[
                styles.requisitoBullet,
                { backgroundColor: item.ok ? "#D1FAE5" : "#FFE2E2" },
              ]}
            >
              {item.ok && (
                <Ionicons name="checkmark" size={12} color="#16A34A" />
              )}
            </View>
            <Text
              style={[
                styles.requisitoText,
                { color: item.ok ? "#16A34A" : "#E7000B" },
              ]}
            >
              {item.label}
            </Text>
          </View>
        ))}
      </View>

      {/* Campo Nova Senha */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Nova senha</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="rgba(10,10,10,0.5)"
            value={novaSenha}
            onChangeText={setNovaSenha}
            secureTextEntry={!showNova}
          />
          <TouchableOpacity onPress={() => setShowNova(!showNova)}>
            <Ionicons
              name={showNova ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#99A1AF"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Campo Confirmar Senha */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Confirme a nova senha</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha novamente"
            placeholderTextColor="rgba(10,10,10,0.5)"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry={!showConfirmar}
          />
          <TouchableOpacity onPress={() => setShowConfirmar(!showConfirmar)}>
            <Ionicons
              name={showConfirmar ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#99A1AF"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Erro */}
      {erro ? <Text style={styles.errorText}>{erro}</Text> : null}

      {/* Botões */}
      <Button
        label="SALVAR"
        loading={loading}
        onPress={handleSalvar}
        disabled={loading || !tudo_valido}
        style={!tudo_valido ? { backgroundColor: "#F9A8B0", elevation: 0 } : undefined}
      />

      <Button
        label="CANCELAR"
        variant="secondary"
        onPress={handleCancelar}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F9FAFB",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 40,
    gap: 16,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#EE2B47",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#101828",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#4A5565",
    textAlign: "center",
    lineHeight: 24,
  },
  bold: {
    fontWeight: "700",
    color: "#101828",
  },
  requisitosBox: {
    width: "100%",
    backgroundColor: "#F3F4F6",
    borderRadius: 16,
    padding: 20,
    gap: 12,
  },
  requisitosHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  requisitosTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#101828",
  },
  requisitosItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  requisitoBullet: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  requisitoText: {
    fontSize: 14,
    lineHeight: 20,
  },
  inputWrapper: {
    width: "100%",
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#364153",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 54,
    borderWidth: 1.11,
    borderColor: "#B9B9B9",
    borderRadius: 14,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#0A0A0A",
  },
  errorText: {
    color: "#EE2B47",
    fontSize: 13,
    alignSelf: "flex-start",
  },
});