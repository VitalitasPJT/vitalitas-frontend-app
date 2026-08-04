import api from "@/services/api";
import { useAuth } from "@/store/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, Button } from "react-native";

export default function AlunoScreen() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo, Aluno! 🎉</Text>

      <Button
        title="Testar API"
        onPress={async () => {
          try {
            const response = await api.get(`/usuario/obter-tipo-usuario/${user?.IdUsuario}`);
            console.log("Sucesso:", response.data);
          } catch (err) {
            console.log("Erro:", err);
          }
        }}
      />

      <Button
        title="Limpar Sessão"
        onPress={async () => {
          await AsyncStorage.clear();
          console.log("Sessão limpa!");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
    color: "#18181b",
  },
});