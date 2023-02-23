import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import InformationCard from "./informationCard";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Caption from "./caption";
import { color } from "../styles/palette";
import Spacing from "./spacing";

const ButtonTextIcon = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Icon name={props.icon} size={32} color={color.primary[500]} />
      <Spacing height={20} />
      <Caption>{props.children}</Caption>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: color.gray[200],
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1.0,

    elevation: 2,
  },
});

export default ButtonTextIcon;
