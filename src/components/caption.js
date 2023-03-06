import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { color } from "../styles/palette";

const Caption = (props) => {
  return (
    <Text style={[styles.text, { color: props.color || color.gray[900] }]}>
      {props.children}
    </Text>
  );
};

export default Caption;

const styles = StyleSheet.create({
  text: {
    fontWeight: "300",
    fontSize: 12,
    letterSpacing: 0.32,
  },
});
