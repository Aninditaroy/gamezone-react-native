import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/about';

export default function AboutStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: '#444',
      headerStyle: {
        backgroundColor: '#eee',
      },
      headerShown: false,
      height: 60,
    }}>
      <Stack.Screen name='About' component={About} />
    </Stack.Navigator>
  )
}