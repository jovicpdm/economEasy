import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Body2 = (props) => {
  return (
    <Text style={[styles.text, { color: props.color || "#070707", textAlign: props.textAlign || "center", }]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Body2;
