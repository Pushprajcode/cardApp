import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LOCAL_IMAGES} from '@cardapp/utils/localimages';
import {COLORS} from '@cardapp/themes/colors';
import {normalize, vh} from '@cardapp/utils/dimensions';
import CustomButton from '@cardapp/components/customButton';

export default function ForgetPasswordMail() {
  const onpressDone = () => {};
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={styles.containerView}>
        <Image source={LOCAL_IMAGES.rotationIcon} />
        <Text
          style={styles.password}>{`Your password has \n been reset!`}</Text>
      </View>
      <CustomButton
        title="DONE"
        buttonContainerStyle={{bottom: vh(150)}}
        onPress={onpressDone}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.8,
  },
  password: {
    color: COLORS.red,
    textAlign: 'center',
    fontSize: normalize(28),
  },
});
