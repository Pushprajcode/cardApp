import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '@cardapp/components/header';
import {COLORS} from '@cardapp/themes/colors';
import {LOCAL_IMAGES} from '@cardapp/utils/localimages';
import OrderHistoryCard from '@cardapp/components/orderHistoryCard';

const orderHistoryData = [
  {
    foodIcon: LOCAL_IMAGES.foodIcon,
    cafeName: 'Desert show cafe',
    time: '1kdfjkdfkj',
    status: 'Delivered',
    amount: '$36.42',
  },
  {
    foodIcon: LOCAL_IMAGES.vegetableIcon,
    cafeName: 'Woof Woof',
    time: '1kdfjkdfkj',
    status: 'Cancelled',
    amount: '$36.42',
  },
  {
    foodIcon: LOCAL_IMAGES.foodIcon,
    cafeName: 'Woof Woof',
    time: '1kdfjkdfkj',
    status: 'Cancelled',
    amount: '$36.42',
  },
];

export default function OrderHistory() {
  const onRender = ({item}: any) => (
    <View>
      <OrderHistoryCard
        leftIcon={item.foodIcon}
        foodName={item.cafeName}
        time={item.time}
        status={item.status}
        amount={item.amount}
      />
    </View>
  );
  return (
    <View style={styles.conatinerView}>
      <Header title={'Order History'} />
      <FlatList data={orderHistoryData} renderItem={onRender} />
    </View>
  );
}

const styles = StyleSheet.create({
  conatinerView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
