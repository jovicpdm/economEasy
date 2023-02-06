import React from "react";
import { StyleSheet, Text } from "react-native";

const HeadLine = (props) => {
  return <Text style={[styles.text, {color: props.color || "#070707"}]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "400",
  },
});

export default HeadLine;
