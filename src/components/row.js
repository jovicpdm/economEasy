import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Row = (props) => {
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: props.justifyContent || "space-around",
        },
      ]}
    >
      {props.children}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
