import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Container = (props) => {
  return (
    <View style={[styles.container, { flex: props.flex || undefined }]}>
      {props.children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
