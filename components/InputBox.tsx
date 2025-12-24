import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type InputBoxProps = TextInputProps;

const InputBox = ({ style, ...props }: InputBoxProps) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor="#B0B0B0"
      {...props}
    />
  );
};

export default InputBox;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingVertical: 13.5,
    paddingHorizontal: 16,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
});
