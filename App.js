import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./src/Navigation/Navigation";
import {Provider} from "react-redux";
import store from "./src/redux/redux-store";
import {loginAPI} from "./src/api/login-api";

export default function App() {
  useEffect(() => {
    loginAPI.login()
  }, [])

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>

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
