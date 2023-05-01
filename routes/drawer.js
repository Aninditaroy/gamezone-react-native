import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import ReviewDetails from "../screens/reviewDetails";

const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Drawer.Screen name="Home" component={HomeStack}
          options={{ drawerLabel: 'GameZone' }} />
        <Drawer.Screen name="About" component={AboutStack} options={{
          drawerLabel: 'About GameZone',
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}