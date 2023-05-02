import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

export default function HomeStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: '#444',
      headerStyle: {
        backgroundColor: '#eee',
        height: 60,
      }
    }}>
      <Stack.Screen name='Home' component={Home}
        options={({ navigation }) => ({
          header: () => <Header navigation={navigation}
            title='GameZone' />
        })}

      />
      <Stack.Screen name='ReviewDetails' component={ReviewDetails}
        options={{
          headerTitle: 'Review Details',
        }} />
    </Stack.Navigator>
  )
}