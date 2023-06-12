import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { color } from "./src/styles/palette";
import Welcome from "./src/screens/Welcome";
import Main from "./src/screens/Main";
import AddEarnings from "./src/screens/AddEarnings";
import Add from "./src/screens/Add";
import AddExpenses from "./src/screens/AddExpenses";
import { Provider } from "react-native-paper";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator
          initialRouteName="main"
          screenOptions={{
            statusBarStyle: "light",
          }}
        >
          <Stack.Screen
            name="Welcome"
            options={{
              title: "Bem-vindo!",
              statusBarColor: color.primary[500],
              headerTintColor: color.primary[100],
              headerStyle: {
                backgroundColor: color.primary[500],
              },
            }}
            component={Welcome}
          />
          <Stack.Screen
            name="main"
            options={{
              headerShown: false,
              statusBarColor: color.primary[500],
            }}
            component={Main}
          />
          <Stack.Screen
            name="add"
            options={{
              title: "adicionar",
              statusBarColor: color.primary[500],
              headerTintColor: color.primary[100],
              headerLeft: null,
              headerStyle: {
                backgroundColor: color.primary[500],
              },
            }}
            component={Add}
          />
          <Stack.Screen
            name="addEarning"
            options={{
              title: "adicionar ganho",
              statusBarColor: color.primary[500],
              headerTintColor: color.primary[100],
              headerLeft: null,
              headerStyle: {
                backgroundColor: color.primary[500],
              },
            }}
            component={AddEarnings}
          />
          <Stack.Screen
            name="addExpense"
            options={{
              title: "adicionar despesa",
              statusBarColor: color.primary[500],
              headerTintColor: color.primary[100],
              headerLeft: null,
              headerStyle: {
                backgroundColor: color.primary[500],
              },
            }}
            component={AddExpenses}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
