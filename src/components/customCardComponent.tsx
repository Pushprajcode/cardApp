import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {normalize, vh, vw} from '@cardapp/utils/dimensions';
import {COLORS} from '@cardapp/themes/colors';
interface CustomCardComponentProps {
  leftIcon?: any;
  title?: any;
  rightIcon?: any;
  onpress: any;
  cardStyle: any;
}

export default function CustomCardComponent(props: CustomCardComponentProps) {
  // console.log('onpress setting ', props.onpress);
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onpress}>
      <View style={[styles.cardViewStyle, props.cardStyle]}>
        <Image source={props.leftIcon} />
        <View
          style={{
            // borderWidth: 1,
            flexDirection: 'row',
            width: 350,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.titleStyle}>{props.title}</Text>
          <Image
            resizeMode="contain"
            style={styles.rightIconStyle}
            source={props.rightIcon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  rightIconStyle: {
    height: vw(10),
    width: vw(10),
    marginRight: vh(10),
  },
  titleStyle: {
    marginLeft: normalize(10),
    fontSize: normalize(16),
    color: COLORS.black,
    fontWeight: '600',
  },
  cardViewStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: vh(21),
    marginHorizontal: normalize(5),
  },
});
