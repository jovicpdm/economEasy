import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { color } from "../styles/palette";

const CustomTextInput = (props) => {
  return (
    <TextInput
    style={styles.input}
    placeholder={props.placeholder}
    keyboardType={props.keyboardType || "default"}
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
