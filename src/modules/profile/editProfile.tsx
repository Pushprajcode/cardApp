import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '@cardapp/themes/colors';
import Header from '@cardapp/components/header';
import {LOCAL_IMAGES} from '@cardapp/utils/localimages';
import {normalize, vh, vw} from '@cardapp/utils/dimensions';
// import ImageCropPicker from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-crop-picker';
import CustomTextInput from '@cardapp/components/customTextInput';
import CustomButton from '@cardapp/components/customButton';

export default function EditProfile() {
  const [name, setName] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [phone, setPhone] = useState<any>();
  const [location, setLocation] = useState<any>();

  const galleryopen = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };
  return (
    <View style={styles.containerView}>
      <Header title={'Edit Profile'} />
      <View
        style={{
          alignSelf: 'center',
          marginTop: vh(48),
        }}>
        <Image style={styles.profileIcon} source={LOCAL_IMAGES.womenIcon} />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.editIconStyle}
          onPress={galleryopen}>
          <Image style={styles.editIcon} source={LOCAL_IMAGES.editIcon} />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: vh(31)}}>
        <CustomTextInput
          placeholder={'NAME'}
          placeholdertextColor={COLORS.lightGrey}
        />
        <CustomTextInput
          placeholder={'EMAIL'}
          placeholdertextColor={COLORS.lightGrey}
        />
        <CustomTextInput
          placeholder={'PHONE NUMBER'}
          placeholdertextColor={COLORS.lightGrey}
        />
        <CustomTextInput
          placeholder={'LOCATION'}
          placeholdertextColor={COLORS.lightGrey}
          dropDownIcon={LOCAL_IMAGES.dropDownIcon}
        />
      </View>
      <CustomButton
        title="save changes"
        buttonContainerStyle={styles.buttonContainerStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  profileIcon: {
    width: vw(100),
    height: vw(100),
  },
  editIconStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  editIcon: {
    height: vw(32),
    width: vw(32),
  },
  buttonContainerStyle: {
    marginTop: vh(16),
  },
});
