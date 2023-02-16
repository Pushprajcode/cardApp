import {doLogIn} from '../action';
import React, {useEffect, useRef, useState} from 'react';
import {COLORS} from '@cardapp/themes/colors';
import CustomButton from '@cardapp/components/customButton';
import {normalize, vh, vw} from '@cardapp/utils/dimensions';
import CustomTextInput from '@cardapp/components/customTextInput';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAMES} from '@cardapp/navigator/screenNmaes';
import {useDispatch} from 'react-redux';

export default function LogIn() {
  const reference = useRef<any>([]);
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  // const signInOnpress=()=>{

  // }
  useEffect(() => {
    console.log('first');
  }, []);
  const signInOnpress = () => {
    let dataSend = {
      email,
      password,
    };
    dispatch(doLogIn(dataSend, (resp: any) => {}));
  };
  const forgotPress = () => {
    navigation.navigate(SCREEN_NAMES.forgotPassword);
  };
  return (
    <View style={styles.containerView}>
      <Text style={styles.singinTextStyle}>{'Sign In'}</Text>
      <CustomTextInput
        ref={(ref: any) => (reference.current[0] = ref)}
        value={email}
        onchange={(text: any) => {
          setEmail(text);
        }}
        placeholder={'Email'}
        placeholdertextColor={COLORS.red}
        multiline={false}
        maximumLength={1000}
        onSubmitEditing={() => {
          reference.current[1].focus();
        }}
      />
      <CustomTextInput
        ref={(ref: any) => (reference.current[1] = ref)}
        value={password}
        onchange={(text: any) => {
          setPassword(text);
        }}
        placeholder={'password'}
        placeholdertextColor={COLORS.red}
        multiline={false}
        maximumLength={1000}
      />
      <TouchableOpacity activeOpacity={0.7} onPress={forgotPress}>
        <Text style={styles.forgotTextStyle}>{'Forgot  password?'}</Text>
      </TouchableOpacity>
      <CustomButton
        title="sign in"
        buttonContainerStyle={styles.containerButton}
        onPress={signInOnpress}
      />
      <View style={styles.accountView}>
        <Text style={styles.signUpText}>{'Don’t have an account? '}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SCREEN_NAMES.signup);
          }}>
          <Text style={styles.upText}>{'Sign up.'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  singinTextStyle: {
    color: COLORS.black,
    fontSize: normalize(28),
    fontWeight: '600',
    marginTop: vh(123),
    marginLeft: normalize(16),
  },
  forgotTextStyle: {
    textAlign: 'right',
    // marginRight: normalize(16),
    color: COLORS.red,
    width: vw(355),
    fontWeight: '400',
    fontSize: normalize(16),
  },
  containerButton: {
    marginTop: vh(52),
  },
  signUpText: {
    fontSize: normalize(16),
    fontWeight: '400',
    color: COLORS.black,
  },
  upText: {
    color: COLORS.red,
    fontSize: normalize(16),
    fontWeight: '400',
  },
  accountView: {
    flexDirection: 'row',
    marginTop: vh(32),
    marginHorizontal: normalize(16),
  },
});
