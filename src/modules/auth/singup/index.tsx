import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import CustomButton from '@cardapp/components/customButton';
import CustomTextInput from '@cardapp/components/customTextInput';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {normalize, vh, vw} from '@cardapp/utils/dimensions';
import {COLORS} from '@cardapp/themes/colors';
import {SCREEN_NAMES} from '@cardapp/navigator/screenNmaes';
import {useNavigation} from '@react-navigation/native';
import {doSignUp} from '../action';
// import NetInfo from '@react-native-community/netinfo';

// import {doSignUp} from '../action';
export default function SignUp() {
  const [name, setName] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [number, setNumber] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [countryCode, setcountryCode] = useState<any>('+91');
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<any>();
  const reference = useRef<any>([]);
  const signUpPress = () => {
    navigation.replace(SCREEN_NAMES.bottomTab);
    let datasend = {
      name: name,
      email: email,
      password: password,
      number: number,
    };
    dispatch(
      doSignUp(datasend, (resp: any) => {
        // console.log('sign', resp);
        // navigation.navigate(SCREEN_NAMES.proe);
      }),
    );
  };
  return (
    <View style={styles.containerView}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.signUp}>{'Sign Up '}</Text>
          <Text style={styles.ownText}>{'Create your own account'}</Text>
        </View>
        {/* <Image
            style={styles.phoneImage}
            resizeMode="contain"
            source={localImages.phone}
          /> */}
      </View>
      <View>
        <CustomTextInput
          ref={(ref: any) => (reference.current[0] = ref)}
          value={name}
          onchange={(text: any) => {
            setName(text);
          }}
          placeholder={'User name'}
          placeholdertextColor={Colors.red}
          multiline={true}
          maximumLength={1000}
          // autoFocus={true}
          onSubmitEditing={() => {
            reference.current[1].focus();
          }}
        />
        <CustomTextInput
          ref={(ref: any) => (reference.current[1] = ref)}
          value={email}
          onchange={(text: any) => {
            setEmail(text);
          }}
          placeholder={'Email'}
          placeholdertextColor={Colors.red}
          multiline={true}
          maximumLength={1000}
          // autoFocus={true}
          onSubmitEditing={() => reference.current[2].focus()}
        />
        <CustomTextInput
          ref={(ref: any) => (reference.current[2] = ref)}
          value={number}
          onchange={(text: any) => {
            setNumber(text);
          }}
          placeholder={'number'}
          placeholdertextColor={Colors.red}
          multiline={true}
          maximumLength={1000}
          // autoFocus={true}
          onSubmitEditing={() => {
            reference.current[3].focus();
          }}
        />
        <CustomTextInput
          ref={(ref: any) => (reference.current[3] = ref)}
          value={password}
          onchange={(text: any) => {
            setPassword(text);
          }}
          placeholder={'password'}
          placeholdertextColor={Colors.red}
          multiline={true}
          maximumLength={1000}
          onSubmitEditing={() => {
            reference.current[4].focus();
          }}
        />
      </View>
      <CustomButton
        title="Submit"
        buttonContainerStyle={styles.buttonContainer}
        disable={disable}
        onPress={signUpPress}
      />
      <View style={styles.accountView}>
        <Text style={styles.signUpText}>
          {'Already have an account? Sign in.'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SCREEN_NAMES.login);
          }}>
          <Text style={styles.upText}>{' Sign in'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  input: {
    height: vh(48),
    width: '100%',
    borderWidth: vw(1),
    borderRadius: normalize(28),
    borderColor: Colors.selectingItemTextInput,
    paddingLeft: normalize(16),
    color: Colors.dimGrey,
  },
  signUp: {
    color: COLORS.black,
    fontSize: normalize(28),
    fontWeight: '600',
    marginTop: vh(123),
    marginLeft: normalize(16),
  },
  ownText: {
    color: Colors.white,
    fontSize: normalize(14),
    fontWeight: '400',
    marginTop: vh(8),
    marginLeft: normalize(24),
  },
  phoneImage: {
    width: vw(178),
    height: vh(128),
    marginTop: vh(72),
  },
  buttonContainer: {
    marginHorizontal: normalize(24),
    marginTop: vh(80),
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
