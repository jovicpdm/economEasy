import React from "react";
import { View, StyleSheet } from "react-native";
import { color } from "../styles/palette";

const CenterContainer = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default CenterContainer;
