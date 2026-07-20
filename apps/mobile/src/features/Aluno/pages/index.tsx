import { View, Text, StyleSheet } from "react-native";

export default function AlunoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo, Aluno! 🎉</Text>
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