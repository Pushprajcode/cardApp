import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '@cardapp/modules/splash';
import {SCREEN_NAMES} from './screenNmaes';
// import SignUp from '@cardapp/modules/auth/singup';
// import LogIn from '@cardapp/modules/auth/login';
import Profile from '@cardapp/modules/profile';
import OrderHistory from '@cardapp/modules/profile/orderhistory';
import SignUp from '@cardapp/modules/auth/singup';
import LogIn from '@cardapp/modules/auth/login';
import BottomStackNavigator from './bottomStackNavigator';
import EditProfile from '@cardapp/modules/profile/editProfile';
import ForgotPassword from '@cardapp/modules/auth/forgorPassword';
import forgetPasswordMail from '@cardapp/modules/auth/fogetPasswordMail';
import TutorialScreen from '@cardapp/modules/auth/tutorial';

export default function NavigatorScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN_NAMES.login}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={SCREEN_NAMES.splash} component={SplashScreen} />
        <Stack.Screen name={SCREEN_NAMES.signup} component={SignUp} />
        <Stack.Screen name={SCREEN_NAMES.login} component={LogIn} />
        <Stack.Screen name={SCREEN_NAMES.profile} component={Profile} />
        <Stack.Screen
          name={SCREEN_NAMES.bottomTab}
          component={BottomStackNavigator}
        />
        <Stack.Screen
          name={SCREEN_NAMES.orderHistory}
          component={OrderHistory}
        />
        <Stack.Screen name={SCREEN_NAMES.editProfile} component={EditProfile} />
        <Stack.Screen
          name={SCREEN_NAMES.forgotPassword}
          component={ForgotPassword}
        />
        <Stack.Screen
          name={SCREEN_NAMES.forgetPasswordMail}
          component={forgetPasswordMail}
        />
        <Stack.Screen
          name={SCREEN_NAMES.tutorailScreen}
          component={TutorialScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
