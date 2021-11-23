import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { setDestination, setOrigin } from '../slices/navSlice';

import { GOOGLE_MAPS_APIKEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import NavFavourites from '../components/NavFavourites';
import NavOptions from '../components/NavOptions';
import React from 'react';
import tw from 'twrnc';
import { useDispatch } from 'react-redux';

const HomeScreen = () => {

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full pt-10 px-4`}>
      <View style={tw``}>
        <Image
          style={{
            width: 100, 
            height: 100, 
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://logodownload.org/wp-content/uploads/2015/05/uber-logo-7.png',
          }}
        />
        <GooglePlacesAutocomplete 
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
            listView: {
              color: 'black', //To see where exactly the list is
              zIndex: 1000, //To popover the component outwards
              position: 'absolute',
              top: 45
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
            //console.log(data);
            //console.log(details);
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={3}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          //onFail={error => console.error(error)}
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: 'blue'
  }
});
