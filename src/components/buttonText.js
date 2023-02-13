import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Body2 from "./body2";
import { color } from "../styles/palette";

const ButtonText = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress;
      }}
    >
      <Body2 color={color.primary[500]}>{props.children}</Body2>
    </TouchableOpacity>
  );
};

export default ButtonText;

const styles = StyleSheet.create({});
