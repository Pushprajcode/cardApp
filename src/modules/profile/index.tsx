import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BackgroundWrapper from '@cardapp/components/backgroundWrapper';
import {normalize, vh, vw} from '@cardapp/utils/dimensions';
import {COLORS} from '@cardapp/themes/colors';
import {LOCAL_IMAGES} from '@cardapp/utils/localimages';
import CustomCardComponent from '@cardapp/components/customCardComponent';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAMES} from '@cardapp/navigator/screenNmaes';
const profileData = [
  {
    images: require('../../assets/images/order.png'),
    iconName: 'Order History',
    rightIcon: LOCAL_IMAGES.rightIcon,
  },
  {
    images: require('../../assets/images/Payment.png'),
    iconName: 'Payment Method',
    rightIcon: LOCAL_IMAGES.rightIcon,
  },
  {
    images: require('../../assets/images/location.png'),
    iconName: 'My Address',
    rightIcon: LOCAL_IMAGES.rightIcon,
  },
  {
    images: require('../../assets/images/Payment.png'),
    iconName: 'My Promocodes',
    rightIcon: LOCAL_IMAGES.rightIcon,
  },
  {
    images: require('../../assets/images/like.png'),
    iconName: 'My Favorite',
    rightIcon: LOCAL_IMAGES.rightIcon,
  },
  {
    images: require('../../assets/images/Signout.png'),
    iconName: 'Sign out',
    rightIcon: LOCAL_IMAGES.rightIcon,
  },
];
export default function Profile() {
  const navigation = useNavigation<any>();
  const onrenderItem = ({item}: any) => {
    const settingonpress = () => {
      switch (item.iconName) {
        case 'Order History':
          navigation.navigate(SCREEN_NAMES.orderHistory);
          break;
        case 'Payment Method':
          navigation.navigate(SCREEN_NAMES.orderHistory);
          break;
        case 'My Address':
          navigation.navigate(SCREEN_NAMES.orderHistory);
          break;
      }
    };
    const onpressEdit = () => {
      navigation.navigate(SCREEN_NAMES.editProfile);
    };
    return (
      <CustomCardComponent
        leftIcon={item.images}
        title={item.iconName}
        rightIcon={item.rightIcon}
        onpress={settingonpress}
        cardStyle={styles.cardStyle}
      />
    );
  };
  const itemSepratorComponent = () => {
    return <View style={styles.itemSepratorStyle}></View>;
  };
  const floatingProfile = () => {
    return (
      <View style={styles.profileCard}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SCREEN_NAMES.editProfile);
          }}>
          <View style={{position: 'absolute', right: 0}}>
            <Image
              style={styles.groupIcon}
              source={LOCAL_IMAGES.groupIcon}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <BackgroundWrapper>
        <Text style={styles.profileText}>{'My Profile'}</Text>

        {floatingProfile()}
        <View style={styles.flatListStyle}>
          <FlatList
            data={profileData}
            renderItem={onrenderItem}
            ItemSeparatorComponent={itemSepratorComponent}
            scrollEnabled={false}
          />
        </View>
      </BackgroundWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  profileText: {
    marginTop: vh(76),
    marginHorizontal: normalize(10),
    color: COLORS.white,
    fontWeight: '600',
    fontSize: vw(24),
  },
  profileCard: {
    marginHorizontal: vw(9),
    height: vh(100),
    backgroundColor: COLORS.white,
    width: vw(350),
    borderRadius: vw(24),
    marginTop: vh(24),
    // alignItems: 'flex-end',
  },
  orderImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  flatListStyle: {
    marginTop: vh(35),
  },
  groupIcon: {
    right: vw(22),
    top: vh(22),
    width: vw(23),
    height: vw(23),
  },
  itemSepratorStyle: {
    borderBottomWidth: 1,
    marginHorizontal: normalize(20),
    // right: 3,
  },
  cardStyle: {
    // borderWidth: 1,
    marginLeft: vw(13),
  },
});
