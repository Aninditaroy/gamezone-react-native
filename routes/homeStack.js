
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

export default function HomeStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      headerTitle: <ReviewDetails />
    }}>
      <Stack.Screen name='Home' component={Home} options={{
        title: ' ',
      }} />
      <Stack.Screen name='ReviewDetails' component={ReviewDetails}
        options={{
          title: 'Review Details',
        }} />
    </Stack.Navigator>
  )
}