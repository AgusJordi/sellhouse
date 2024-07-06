import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import useProperties from '../../hooks/useProperties';
import jsonData from '../../data/data.json';
import LoadingScreen from '../../components/Loading/Loading';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  const { data, isLoading, error } = useProperties();

  const properties = !data || error ? jsonData.data.map(item => item) : data.data.map(item => item);

  const renderItem = ({ item }) => {
    const img = require('../../assets/home.png');
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Detail', { property: item })}
      >
        <Image source={img} style={styles.img} />
        <Text style={styles.title}>{item?.property?.address?.streetAddress}</Text>
        <Text style={styles.type}>{item?.property?.propertyType}</Text>
        <Text style={styles.price}>${item?.property?.price?.value}</Text>
        <Text style={styles.location}>{item?.property?.address?.city}, {item?.property?.address?.state} {item?.property?.address?.zipcode}</Text>
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    <LoadingScreen />
}

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Lista de propiedades en venta:</Text>
      <FlatList
        data={properties}
        renderItem={renderItem}
        keyExtractor={(item) => item?.property?.zpid?.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};


export default HomeScreen;
