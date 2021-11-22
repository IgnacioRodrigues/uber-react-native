import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import tw from 'twrnc';

const HomeScreen = () => {
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
