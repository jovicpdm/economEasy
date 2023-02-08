import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { color } from "../styles/palette";

const SubHeading = (props) => {
  return (
    <Text style={[styles.text, { color: props.color || color.gray[900] }]}>
      {props.children}
    </Text>
  );
};

export default SubHeading;

const styles = StyleSheet.create({
  text: {},
});
