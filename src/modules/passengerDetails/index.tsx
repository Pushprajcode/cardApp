import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import passengerApi, {createPassengerDataApi} from './action';

export default function Passenger() {
  const [passenger, setPassenger] = useState([]);
  const dispatch: any = useDispatch();
  // console.log('passenger', passenger);
  const onpress = () => {
    dispatch(
      passengerApi((resp: any) => {
        // console.log('indexconsole', resp?.data?.data);
        setPassenger(resp?.data?.data);
      }),
    );
  };
  const onpressPost = () => {
    let data = {
      name: 'John Doe',
      trips: 250,
      airline: 5,
    };
    dispatch(
      createPassengerDataApi(data, (resp: any) => {
        // console.log('----->');
      }),
    );
  };
  const onRender = ({item}: any) => {
    console.log('item', item.name);
    return (
      <View>
        <Text
          style={{
            color: 'red',
            marginVertical: 20,
            marginTop: 50,
          }}>
          {item.name}
        </Text>
      </View>
    );
  };
  const kextractorItem = (item: any, index: number) => {
    return item._id;
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2,
      }}>
      <FlatList
        data={passenger}
        renderItem={onRender}
        refreshing={true}
        keyExtractor={kextractorItem}
        // bounces={false}
        // scrollEnabled={false}
        ItemSeparatorComponent={() => {
          return <View style={{borderWidth: 1}}></View>;
        }}
        // ListEmptyComponent={() => {
        //   return (
        //     <View style={{flex: 1}}>
        //       <Text style={{color: 'green'}}>
        //         {'NO DATA PRESENT IN FLATLIST '}
        //       </Text>
        //     </View>
        //   );
        // }}
        // ListFooterComponent={() => {
        //   return (
        //     <View style={{flex: 1}}>
        //       <Text style={{color: 'green'}}>{'kdkld '}</Text>
        //     </View>
        //   );
        // }}
      />
      <TouchableOpacity onPress={onpress}>
        <Text style={{color: 'red'}}>{'press here'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onpressPost}>
        <Text style={{color: 'red', marginTop: 80}}>{'postpress'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
