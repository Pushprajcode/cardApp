import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import {LOCAL_IMAGES} from '@cardapp/utils/localimages';
import {LOCAL_IMAGES} from '@cardapp/utils/localimages';
import {COLORS} from '@cardapp/themes/colors';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAMES} from '@cardapp/navigator/screenNmaes';

export default function SplashScreen() {
  const navigation = useNavigation<any>();
  setTimeout(() => {
    navigation.navigate(SCREEN_NAMES.login);
  }, 3000);
  return (
    <View>
      <Image source={LOCAL_IMAGES.splash} />
    </View>
  );
}

const styles = StyleSheet.create({});
