import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize, vh, vw} from '@cardapp/utils/dimensions';
interface OrderHistoryCardProp {
  leftIcon?: any;
  foodName?: any;
  time?: any;
  status?: any;
  amount: number;
  icon?: any;
}
export default function OrderHistoryCard(props: OrderHistoryCardProp) {
  const {leftIcon, foodName, time, status, amount, icon} = props;
  return (
    <View style={styles.conatinerView}>
      <Image source={leftIcon} />
      <View style={styles.textStyle}>
        <Text>{foodName}</Text>
        <Text>{time}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

            width: vw(210),
          }}>
          <Text>{status}</Text>
          <Text>{amount}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatinerView: {
    // height: vh(108),
    marginHorizontal: normalize(16),
    flexDirection: 'row',
    marginTop: vh(48),
    borderRadius: normalize(16),
    backgroundColor: 'white',
    shadowColor: '#3B5999',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 18,

    elevation: 5,
    zIndex: 10,
  },
  textStyle: {
    marginHorizontal: vw(16),
    // borderWidth: 1,
    marginVertical: vh(18),
  },
});
