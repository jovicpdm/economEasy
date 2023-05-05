import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { color } from "../styles/palette";

const CustomTextInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      value={props.value}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType || "default"}
      onChangeText={props.onChangeText}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    height: 52,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: color.gray[100],
    marginTop: 4,
    backgroundColor: color.gray[200],
    paddingHorizontal: 24,
  },
});
