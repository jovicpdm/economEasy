import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Caption from "./caption";
import Body2 from "./body2";
import { color } from "../styles/palette";
import Spacing from "./spacing";

const MenuItem = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Body2 color={color.primary[500]} textAlign="left">
        {props.title}
      </Body2>
      <Spacing height={4} />
      <Caption color={color.gray[500]}>{props.description}</Caption>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: color.gray[200],
  },
});
