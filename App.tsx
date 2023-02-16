import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Passenger from './src/modules/passengerDetails';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Header from './src/components/header';
import NavigatorScreen from '@cardapp/navigator';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <Provider store={store}>
        <Passenger />
      </Provider> */}
      <Provider store={store}>
        <NavigatorScreen />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({});
