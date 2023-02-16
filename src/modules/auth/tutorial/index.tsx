import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vh, vw} from '@cardapp/utils/dimensions';
const data = [
  {
    images: require('../../../assets/images/restaurant.png'),
    text: 'Search Restaurants',
    additionText:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or ',
  },
  {
    images: require('../../../assets/images/restaurant.png'),
    text: 'Choose favorite dishes!',
    additionText:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or ',
  },
  {
    images: require('../../../assets/images/restaurant.png'),
    text: 'Get your food ',
    additionText:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or ',
  },
];

export default function TutorialScreen() {
  const onrederItem = ({item}: any) => {
    return (
      <View style={styles.itemView}>
        <Image
          style={{height: vh(190), width: vw(190), alignItems: 'center'}}
          source={item.images}
        />
        {/* <Text style={{color: 'black', marginTop: 40}}>{item.Text}</Text> */}
        {/* <Text>{item.additionText}</Text> */}
        <Text>{item.text}</Text>
      </View>
    );
  };
  return (
    <View style={styles.containerStyle}>
      <FlatList
        data={data}
        // renderItem={onrederItem}
        renderItem={onrederItem}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  itemView: {
    justifyContent: 'center',
    alignItems: 'center',
    // marh
  },
});
