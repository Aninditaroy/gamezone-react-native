import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/about';
import Header from '../shared/header';

export default function AboutStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: '#444',
      headerStyle: {
        backgroundColor: '#eee',
        height: 60,
      },
    }}>
      <Stack.Screen name='About' component={About}
        options={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} title='About GameZone' />
        })} />
    </Stack.Navigator>
  )
}