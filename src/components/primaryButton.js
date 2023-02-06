import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { color } from "../styles/palette";
import TextButton from "./textButton";

const PrimaryButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <TextButton>{props.children}</TextButton>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.primary[500],
    paddingVertical: 12,
    width: "100%",
    borderRadius: 16,
  },
});
