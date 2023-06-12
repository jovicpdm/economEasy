import React from "react";
import { StyleSheet } from "react-native";
import { Snackbar } from "react-native-paper";

const customSnackbar = (props) => {
  return (
    <Snackbar visible={props.visible} onDismiss={props.onDismissSnackBar}>
      Hey there! I'm a Snackbar.
    </Snackbar>
  );
};

export default customSnackbar;

const styles = StyleSheet.create({});
