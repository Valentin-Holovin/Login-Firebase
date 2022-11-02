import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "../screen/StartScreen";
import WelcomeScreen from "../screen/WelcomeScreen";
import LoginScreen from "../screen/LoginScreen";

const AuthStackNavigator = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator initialRouteName="Start">
      <AuthStack.Screen
        component={StartScreen}
        name="Start"
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        component={LoginScreen}
        name="Login"
      />
    </AuthStack.Navigator>
  );
};

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Welcome"
          options={{
            headerShown: false,
          }}
          component={WelcomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
