import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface InputProps extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
  hasError?: boolean;
  rightElement?: React.ReactNode;
}

export default function Input({ icon, hasError, rightElement, ...rest }: InputProps) {
  return (
    <View style={[styles.container, hasError && styles.containerError]}>
      {icon && (
        <Ionicons name={icon} size={20} color="#18181b" style={styles.icon} />
      )}
      <TextInput
        style={styles.input}
        placeholderTextColor="#71717b"
        {...rest}
      />
      {rightElement}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  containerError: {
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
});