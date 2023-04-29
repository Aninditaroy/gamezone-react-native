import React, { useEffect, useState } from 'react';
import Home from './screens/home';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
          'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
        });
      }
      catch (e) {
        console.warn(e);
      }
      finally {
        setFontsLoaded(true);
      }
    })();
  }, []);

  if (fontsLoaded) {
    SplashScreen.hideAsync();
    return <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" " component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  }
  else {
    return null;
  }
}



















// import React, { useState } from 'react';
// import Home from './screens/home';
// import * as Font from 'expo-font';
// import AppLoading from "expo-app-loading";

// const getFonts = () => Font.loadAsync({
//   'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
//   'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
// });

// export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false);

//   if (fontsLoaded) {
//     return (
//       <Home />
//     );
//   } else {
//     return (
//       <AppLoading
//         startAsync={getFonts}
//         onFinish={() => setFontsLoaded(true)}
//         onError={console.warn}
//       />
//     );
//   }

// }
