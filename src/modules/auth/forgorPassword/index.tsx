import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '@cardapp/components/header';
import {COLORS} from '@cardapp/themes/colors';
import {normalize, vh, vw} from '@cardapp/utils/dimensions';
import CustomTextInput from '@cardapp/components/customTextInput';
import CustomButton from '@cardapp/components/customButton';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAMES} from '@cardapp/navigator/screenNmaes';

export default function ForgotPassword() {
  const navigation = useNavigation<any>();
  const sendOnpress = () => {
    navigation.navigate(SCREEN_NAMES.forgetPasswordMail);
  };
  return (
    <View>
      <Header title={'Forgot password'} />
      <View style={styles.textStyleView}>
        <Text style={styles.textStyle}>
          {
            'Please enter your email address. You will receive a link to create a new password via email.'
          }
        </Text>
      </View>
      <CustomTextInput
        placeholder={'email'}
        placeholdertextColor={COLORS.lightGrey}
      />
      <CustomButton
        title="Send"
        buttonContainerStyle={styles.buttonStyle}
        onPress={sendOnpress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyleView: {
    marginHorizontal: vw(16),
    marginTop: vh(43),
  },
  textStyle: {
    color: COLORS.lightGrey,
    fontSize: normalize(13),
  },
  buttonStyle: {
    marginTop: vh(15),
  },
});
