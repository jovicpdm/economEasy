import React from "react";
import { View } from "react-native";
import NumericInput from "react-native-numeric-input";
import { color } from "../styles/palette";

import Caption from "./caption";

const CustomNumericInput = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Caption color={color.primary[500]}>{props.title}</Caption>
      <NumericInput
        onChange={props.onChange}
        rounded={true}
        totalWidth={100}
        totalHeight={40}
        separatorWidth={0}
        minValue={props.minValue}
        rightButtonBackgroundColor={color.primary[500]}
        leftButtonBackgroundColor={color.primary[500]}
        maxValue={props.maxValue}
      />
    </View>
  );
};

export default CustomNumericInput;
