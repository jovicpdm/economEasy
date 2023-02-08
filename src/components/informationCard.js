import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { color } from "./../styles/palette";

const InformationCard = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default InformationCard;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: color.gray[200],
    borderRadius: 16,
    alignItems: "center",
  },
});
