import { View, Text } from "react-native";
import React from "react";
import MenuItem from "../components/menuItem";

const Add = ({ navigation }) => {
  return (
    <View>
      <MenuItem
        title="ganho"
        description="adicione o dinheiro que você recebeu/receberá"
        onPress={() => {
          navigation.navigate("addEarning");
        }}
      />
      <MenuItem
        title="despesa"
        description="adicione o dinheiro que você gastou/gastará"
      />
    </View>
  );
};

export default Add;