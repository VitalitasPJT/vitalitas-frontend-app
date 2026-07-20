import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  loading?: boolean;
  variant?: "primary" | "secondary";
}

export default function Button({
  label,
  loading,
  variant = "primary",
  style,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, variant === "secondary" && styles.secondary, style]}
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={[styles.text, variant === "secondary" && styles.textSecondary]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 60,
    backgroundColor: "#ee2b47",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#ee2b47",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  secondary: {
    backgroundColor: "#D1D5DC",
    shadowColor: "transparent",
    elevation: 0,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
  },
  textSecondary: {
    color: "#000",
  },
});