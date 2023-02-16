import React from 'react';
import {Image} from 'react-native';
// import Activity from '../screens/activity';
// import Account from '../screens/account';
// import Search from '../screens/search';
// import Home from '../screens/home';
// import Upload from '../screens/upload';
import Home from '@cardapp/modules/home';
import OrderHistory from '@cardapp/modules/profile/orderhistory';
import Profile from '@cardapp/modules/profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '@cardapp/themes/colors';
import {LOCAL_IMAGES} from '@cardapp/utils/localimages';
import SearchScreen from '@cardapp/modules/search';
import {SCREEN_NAMES} from './screenNmaes';

const Tab = createBottomTabNavigator();
const BottomTabComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: COLORS.lightGrey,
        tabBarActiveTintColor: COLORS.red,
        tabBarStyle: {
          backgroundColor: COLORS.white,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused, color}) => (
            <Image
              source={LOCAL_IMAGES.homeIcon}
              style={
                focused
                  ? [{width: 21.18, height: 21.18}, {tintColor: COLORS.red}]
                  : {width: 21.18, height: 21.18}
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={SearchScreen}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => (
            <Image
              source={LOCAL_IMAGES.searchIcon}
              style={
                focused
                  ? [{width: 21.18, height: 21.18}, {tintColor: COLORS.red}]
                  : {width: 21.18, height: 21.18}
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Order'}
        component={OrderHistory}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => (
            <Image
              source={LOCAL_IMAGES.orderImg}
              style={
                focused
                  ? [{width: 21.18, height: 21.18}, {tintColor: COLORS.red}]
                  : {width: 21.18, height: 21.18}
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => (
            <Image
              source={LOCAL_IMAGES.profileIcon}
              style={
                focused
                  ? [{width: 21.18, height: 21.18}, {tintColor: COLORS.red}]
                  : {width: 21.18, height: 21.18}
              }
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Search"
        component={OrderHistory}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => (
            <Image
              source={LOCAL_IMAGES.orderImg}
              style={
                focused
                  ? [{width: 21.18, height: 21.18}, {tintColor: COLORS.red}]
                  : {width: 21.18, height: 21.18}
              }
            />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => (
            <Image
              source={LOCAL_IMAGES.rightIcon}
              style={
                focused
                  ? [{width: 21.18, height: 21.18}, {tintColor: COLORS.red}]
                  : {width: 21.18, height: 21.18}
              }
            />
          ),
        }}
      /> */}
      {/* 
      <Tab.Screen
        name="Upload"
        component={Upload}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.UPLOAD_IMAGE}
              style={
                focused
                  ? [
                      {width: 21.18, height: 21.18},
                      {tintColor: COLOR.LIGHT_BLUE},
                    ]
                  : {width: 21.18, height: 21.18}
              }
            />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.ACTIVITY_IMAGE}
              style={
                focused
                  ? [
                      {width: 21.18, height: 21.18},
                      {tintColor: COLOR.LIGHT_BLUE},
                    ]
                  : {width: 21.18, height: 21.18}
              }
            />
          ),
        }}
      /> */}

      {/* <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.ACCOUNT_IMAGE}
              style={
                focused
                  ? [
                      {width: 21.18, height: 21.18},
                      {tintColor: COLOR.LIGHT_BLUE},
                    ]
                  : {width: 21.18, height: 21.18}
              }
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};
export default BottomTabComponent;
