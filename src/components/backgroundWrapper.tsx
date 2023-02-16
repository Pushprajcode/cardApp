import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LOCAL_IMAGES} from '@cardapp/utils/localimages';
import {vh, vw} from '@cardapp/utils/dimensions';

interface propschildren {
  children?: any;
}

export default function BackgroundWrapper(props: propschildren) {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={LOCAL_IMAGES.backGroundImg}
        style={styles.backGroundImg}
        resizeMode={'contain'}
        resizeMethod={'resize'}
      />
      <View style={{position: 'absolute'}}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  backGroundImg: {
    height: vh(177),
    width: '100%',
  },
});
