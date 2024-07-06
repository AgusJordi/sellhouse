import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import DetailScreenStyles from './styles';

const DetailScreen = ({ route }) => {
  const { property } = route.params;
  return (
    <ScrollView style={DetailScreenStyles.detailContainer}>
      <Image source={require('../../assets/home.png')} style={DetailScreenStyles.detailImage} />
      <Text style={DetailScreenStyles.detailTitle}>{property?.property?.address?.streetAddress}</Text>
      <Text style={DetailScreenStyles.detailPrice}>${property?.property?.price?.value}</Text>
      <Text style={DetailScreenStyles.otherDetails}>Tipo de propiedad: <Text style={DetailScreenStyles.data}>{property?.property?.propertyType}</Text></Text>
      <Text style={DetailScreenStyles.otherDetails}>Habitaciones: <Text style={DetailScreenStyles.data}>{property?.property?.bedrooms}</Text></Text>
      <Text style={DetailScreenStyles.otherDetails}>Baños: <Text style={DetailScreenStyles.data}>{property?.property?.bathrooms}</Text></Text>
      <Text style={DetailScreenStyles.otherDetails}>Direccion: <Text style={DetailScreenStyles.data}>{property?.property?.address?.streetAddress}, {property?.property?.address?.state}, {property?.property?.address?.city}.</Text></Text>
      <MapView
        style={DetailScreenStyles.map}
        initialRegion={{
          latitude: property?.property?.location?.latitude,
          longitude: property?.property?.location?.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{
            latitude: property?.property?.location?.latitude,
            longitude: property?.property?.location?.longitude,
          }}
          title={property?.property?.address?.streetAddress}
        />
        {/* TODO: renderizar imagenes horizontal */}
        {/* <FlatList
        horizontal
        data={property?.property?.media?.allPropertyPhotos?.highResolution}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={require('../../assets/home.png')} style={DetailScreenStyles.imageThumbnail} />
        )}
      /> */}
      </MapView>
    </ScrollView>
  );
};

export default DetailScreen;
