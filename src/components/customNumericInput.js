import React from "react";
import { View } from "react-native";
import NumericInput from "react-native-numeric-input";

import Caption from "./caption";

const CustomNumericInput = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Caption>{props.title}</Caption>
      <NumericInput rounded={true} totalWidth={60} separatorWidth={0} />
    </View>
  );
};

export default CustomNumericInput;
