import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Body2 = (props) => {
  return (
    <Text style={[styles.text, { color: props.color || "#070707" }]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default Body2;
