import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { GOOGLE_MAPS_APIKEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Icon } from 'react-native-elements';
import NavFavourites from './NavFavourites';
import React from 'react';
import { setDestination } from '../slices/navSlice';
import tw from 'twrnc';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const NavigateCard = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Ignacio</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View style={tw``}>
          <GooglePlacesAutocomplete 
            placeholder='Where to?'
            styles={toInputBoxStyles}
            fetchDetails={true}
            returnKeyType={'search'}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(setDestination({
                location: details.geometry.location,
                description: data.description,
              }));
              
              navigation.navigate('RideOptionsCard');
            }}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          />
        </View>
        
        <NavFavourites />
      </View>

      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('RideOptionsCard')}
          style={tw`flex flex-row items-center justify-between bg-black w-24 px-4 py-3 rounded-full`}
        >
          <Icon name='car' type='font-awesome' color='white' size={16} />
          <Text style={tw`text-white text-center ml-2`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row items-center justify-between w-24 px-4 py-3 rounded-full`}>
          <Icon name='fast-food-outline' type='ionicon' color='black' size={16} />
          <Text style={tw`text-black text-center ml-2`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20, 
    flex: 0
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 4,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
