import MainScreen from "../Screens/MainScreen";
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import navigatorOptions from "./NavigatorOptions";

const Stack = createStackNavigator()

export default function MainNavigationStack({navigator}) {
  return (
    <Stack.Navigator
      screenOptions={navigatorOptions}>
      <Stack.Screen
        name="Home"
        component={MainScreen}/>
    </Stack.Navigator>
  );
}
