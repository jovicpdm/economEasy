import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { color } from "../styles/palette";

const Title = (props) => {
  return (
    <Text style={[styles.text, { color: props.color || color.gray[900] }]}>
      {props.children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontWeight: "500",
    fontSize: 20,
  },
});
