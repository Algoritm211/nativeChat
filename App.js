import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./src/Navigation/Navigation";

export default function App() {
  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
})
