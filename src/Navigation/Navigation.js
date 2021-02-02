import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import MainNavigationStack from "./MainNavigation";
import ChatNavigationStack from "./ChatNavigation";



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



