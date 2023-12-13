import React, { useEffect } from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from '../screens/login';
import Splash from '../screens/splash';

const Stack = createStackNavigator();


//{ theme }: { theme: Theme }
const StackNavigationContainer = () => {

  
  const screenOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: 'white' },
    ...TransitionPresets.SlideFromRightIOS,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ ...screenOptions }}>
         <Stack.Screen name="splash" component={Splash} />
         <Stack.Screen name="login" component={Login} />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default StackNavigationContainer;
