import React from "react";
import { View } from "react-native";
import NumericInput from "react-native-numeric-input";
import { color } from "../styles/palette";

import Caption from "./caption";

import CustomTextInput from "./customTextInput";
import { StyleSheet } from "react-native";
import Spacing from "./spacing";

const CustomNumericInput = (props) => {
  return (
    <View style={styles.container}>
      <Caption color={color.primary[500]}>{props.title}</Caption>
      <Spacing width={8}  />
      <CustomTextInput
        onChangeText={props.onChange}
        rounded={true}
        separatorWidth={0}
      />
    </View>
  );
};

export default CustomNumericInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    
  }
})
