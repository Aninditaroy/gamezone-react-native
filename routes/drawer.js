import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerTintColor: '#444',
        headerStyle: {
          backgroundColor: '#eee',
        },
        height: 60,
        headerTitleAlign: 'center',
      }} >
        <Drawer.Screen name="Home" component={HomeStack} options={{
          headerTitle: 'GameZone',
        }} />
        <Drawer.Screen name="About" component={AboutStack} options={{
          headerTitle: 'About GameZone',
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}