import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
});
