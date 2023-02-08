import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { color } from "./../styles/palette";

import Extract from "./Extract";
import Home from "./Home";
import PiggyBank from "./PiggyBank";

const Main = () => {
  const Tab = createBottomTabNavigator();

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Extrato"
          component={Extract}
          options={{
            tabBarIcon: ({ tintColor, focused }) =>
              focused ? (
                <Icon name="history" size={24} color={color.primary[500]} />
              ) : (
                <Icon name="history" size={24} color={color.gray[500]} />
              ),
            tabBarActiveTintColor: color.primary[500],
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ tintColor, focused }) =>
              focused ? (
                <Icon name="home" size={24} color={color.primary[500]} />
              ) : (
                <Icon name="home" size={24} color={color.gray[500]} />
              ),
            tabBarActiveTintColor: color.primary[500],
          }}
        />
        <Tab.Screen
          name="Cofrinho"
          component={PiggyBank}
          options={{
            tabBarIcon: ({ tintColor, focused }) =>
              focused ? (
                <Icon name="piggy-bank" size={24} color={color.primary[500]} />
              ) : (
                <Icon name="piggy-bank" size={24} color={color.gray[500]} />
              ),
            tabBarActiveTintColor: color.primary[500],
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Main;
