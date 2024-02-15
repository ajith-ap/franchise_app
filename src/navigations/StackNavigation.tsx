import React, { useEffect } from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from '../screens/login';
import Splash from '../screens/splash';
import SetLocation from '../screens/set_location';
import Home from '../screens/home';
import UpdateFood from '../screens/update_food';
import ViewBusiness from '../screens/view_business';
import DailyBusiness from '../screens/daily_business';
import CustomDateRange from '../screens/custom_date_range';
import CustomDateVendor from '../screens/custom_date_vendor';
import UpdatePage from '../screens/update_page';
import StopOrder from '../screens/stop_order';
import Settings from '../screens/settings';
import ScanMachine from '../screens/scan_machine';
import Support from '../screens/support';
import TAndC from '../screens/t&c/Index';

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
         <Stack.Screen name="Splash" component={Splash} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="SetLocation" component={SetLocation} />
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="UpdateFood" component={UpdateFood} />
         <Stack.Screen name="ViewBusiness" component={ViewBusiness} />
         <Stack.Screen name="DailyBusiness" component={DailyBusiness} />
         <Stack.Screen name="CustomDateRange" component={CustomDateRange} />
         <Stack.Screen name="CustomDateVendor" component={CustomDateVendor} />
         <Stack.Screen name="UpdatePage" component={UpdatePage} />
         <Stack.Screen name="StopOrder" component={StopOrder} />
         <Stack.Screen name="Settings" component={Settings} />
         <Stack.Screen name="ScanMachine" component={ScanMachine} />
         <Stack.Screen name="TAndC" component={TAndC} />
         <Stack.Screen name="Support" component={Support} />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default StackNavigationContainer;