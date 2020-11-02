import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../Screens/SignUp';
import ForgotPassword from '../Screens/ForgotPassword';
import NewPassword from '../Screens/NewPassword';
import SignIn from '../Screens/SignIn';
import Verify from '../Screens/Verify';

export const StackMain = createStackNavigator();

export const StackContainer = () => {
  return (
    <StackMain.Navigator initialRouteName='Login' screenOptions={{
        headerShown:false
    }}>
    <StackMain.Screen name="Login" component={SignIn}  />
    <StackMain.Screen name="SignUp" component={SignUp} />
    <StackMain.Screen name="ForgetPass" component={ForgotPassword} />
    <StackMain.Screen name="Verify" component={Verify} />
    <StackMain.Screen name="NewPass" component={NewPassword} />
  </StackMain.Navigator>
  );
};
