import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {LOCAL_IMAGES} from '@cardapp/utils/localimages';
import {COLORS} from '@cardapp/themes/colors';
import {normalize, vh, vw} from '@cardapp/utils/dimensions';
import {useNavigation} from '@react-navigation/native';

interface props {
  title: any;
  rightIcon?: any;
}

export default function Header(props: props) {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          style={styles.iconStyle}
          resizeMode="contain"
          source={LOCAL_IMAGES.rightIcon}
        />
      </TouchableOpacity>

      <Text style={styles.titleStyle}>{props.title}</Text>

      <View>
        {props.rightIcon && (
          <Image
            style={styles.iconStyle}
            resizeMode="contain"
            source={props.rightIcon}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: vh(70),
    flexDirection: 'row',
    marginHorizontal: normalize(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconStyle: {
    width: vw(20),
    height: vw(20),
    tintColor: COLORS.black,
    transform: [{rotate: '180deg'}],
  },
  titleStyle: {
    fontSize: normalize(18),
    fontWeight: '600',
  },
});
