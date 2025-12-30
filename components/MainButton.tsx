import { FONT } from "@/constants/font";
import React, { ReactNode } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

interface ButtonProps {
  children: ReactNode;
  size?: "medium" | "large";
  selected?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const MainButton = ({
  children,
  size = "medium",
  selected = false,
  onPress,
  style,
  disabled = false,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        styles[size],
        pressed && styles.pressed,
        disabled && styles.disabled,
        selected && styles.selected,
        style,
      ]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  base: {
    backgroundColor: "#FFE571",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  medium: {
    paddingVertical: 12.5,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 149,
  },

  pressed: {
    opacity: 0.85,
  },
  disabled: {
    opacity: 0.4,
  },

  selected: {
    backgroundColor: "#FFE571",
  },

  text: {
    color: "#232323",
    fontFamily: FONT.cookie.bold,
    fontSize: 16,
  },
});
