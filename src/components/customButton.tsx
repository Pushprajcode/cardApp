import {COLORS} from '@cardapp/themes/colors';
import {normalize} from '@cardapp/utils/dimensions';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface props {
  title?: string;
  onPress?: any;
  titleTextStyle?: any;
  disable?: boolean;
  buttonContainerStyle: any;
}
/**
 * this is used for set button themes globally component
 * @param {string} title-title for button
 * @param {Function} onPress: press item
 * @param onPress:title text style for buttton text
 *  @param buttonContainerStyle :used for buttonContainerStyle
 */

/* 
component used for view ui of button 
*/
export default function CustomButton(prop: props) {
  const {title, onPress, titleTextStyle, disable, buttonContainerStyle} = prop;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disable}
      onPress={onPress}
      style={[styles.buttonMainViewStyle, buttonContainerStyle]}>
      <Text style={styles.innerTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonMainViewStyle: {
    borderRadius: normalize(38),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.red,
    marginHorizontal: normalize(16),
    paddingVertical: normalize(20),
  },
  innerTextStyle: {
    alignSelf: 'center',
    fontSize: normalize(15),
    color: 'white',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
