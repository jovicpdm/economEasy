import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { color } from "../styles/palette";
import TextButton from "./textButton";
import { Button } from "react-native-paper";

const PrimaryButton = (props) => {
  return (
    <Button
      buttonColor={color.primary[500]}
      style={styles.button}
      onPress={props.onPress}
    >
      <TextButton>{props.children}</TextButton>
    </Button>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.primary[500],
    paddingVertical: 4,
  },
});
