import React from "react";
import { Text, StyleSheet } from "react-native";
import { color } from "../styles/palette";

const TextButton = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 1.6,
    textAlign: "center",
    color: color.gray[100]
  },
});

export default TextButton;
