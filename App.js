// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import HomeScreen from './screens/HomeScreen';
import BottomTabs from './components/BottomTabs';
import LoginScreen from './screens/LoginScreen';  // Import LoginScreen
import SignUpScreen from './screens/SignUpScreen';  // Import SignUpScreen

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}  />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
