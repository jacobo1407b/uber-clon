import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import EatsScreen from './screens/EatsScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//set up redux

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>

            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="EatsScreen"
              component={EatsScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>

    </Provider>
  );
}


