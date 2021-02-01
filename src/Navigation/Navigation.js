import * as React from 'react';
import {View, Text, Button, Platform, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from "../Screens/MainScreen";
import ChatScreen from "../Screens/ChatScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Image} from "react-native";
import {Icon} from "react-native-elements";


const Stack = createStackNavigator()

const navigatorOptions = ({navigation}) =>  {
  return {
    headerStyle: {
      backgroundColor: 'blue',

    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'white'
    },
    headerLeft: () => (
      <View style={stylesIcon.iconView}>
        <Icon
          type="ionicon"
          name={"md-menu"}
          color={'white'}
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
    )
  }
}

const stylesIcon = StyleSheet.create({
  iconView: {
    marginLeft: 15,
  },
})

function MainNavigationStack({navigator}) {
  return (
    <Stack.Navigator
      screenOptions={navigatorOptions}>
      <Stack.Screen
        name="Home"
        component={MainScreen}/>
    </Stack.Navigator>
  );
}

function ChatNavigationStack({navigator}) {
  return (
    <Stack.Navigator
      screenOptions={navigatorOptions}>
      <Stack.Screen
        name="Chat"
        component={ChatScreen}/>
    </Stack.Navigator>
  );
}


const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name={'main'}
          component={MainNavigationStack}
          options={{
            title: 'Главная страница'
          }}
        />
        <Drawer.Screen
          name={'chat'}
          component={ChatNavigationStack}
          options={{
            title: 'Чат'
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}



