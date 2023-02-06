import React from "react";
import { View, StyleSheet } from "react-native";

const Spacing = (props) => {
  return (
    <View style={{ height: props.height || 0, width: props.width || 0 }} />
  );
};

export default Spacing;
