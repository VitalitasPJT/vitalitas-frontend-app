import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
  disabled,
  ...rest
}: ButtonProps) {
  const isDisabled = loading || disabled;

  if (variant === "secondary") {
    return (
      <TouchableOpacity
        style={[styles.button, styles.secondary, style]}
        disabled={isDisabled}
        {...rest}
      >
        {loading ? (
          <ActivityIndicator color="#000" />
        ) : (
          <Text style={[styles.text, styles.textSecondary]}>{label}</Text>
        )}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={isDisabled}
      style={[{ width: "100%" }, style]}
      {...rest}
    >
      <LinearGradient
        colors={["#EE2B47", "#FF4059"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.button, disabled && !loading && styles.disabled]}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.text}>{label}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 60,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#ee2b47",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  disabled: {
    opacity: 0.5,
  },
  secondary: {
    backgroundColor: "#D1D5DC",
    shadowColor: "transparent",
    elevation: 0,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 1,
  },
  textSecondary: {
    color: "#000",
  },
});