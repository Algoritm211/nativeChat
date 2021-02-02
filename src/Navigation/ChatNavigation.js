import {createStackNavigator} from "@react-navigation/stack";
import ChatScreen from "../Screens/ChatScreen/ChatScreen";
import * as React from "react";
import navigatorOptions from "./NavigatorOptions";

const Stack = createStackNavigator()


export default function ChatNavigationStack({navigator}) {
  return (
    <Stack.Navigator
      screenOptions={navigatorOptions}>
      <Stack.Screen
        name="Chat"
        component={ChatScreen}/>
    </Stack.Navigator>
  );
}
