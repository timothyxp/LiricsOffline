import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Router from 'react-native-easy-router';
import Profile from './src/components/Screen/Profile/profile.js';
import Search from './src/components/Screen/Search/search.js';
import Offline from './src/components/Screen/Offline/offline.js';
const routes = {Profile, Search, Offline};

export default class App extends React.Component {
  render() {
    return (
      <Router routes={routes} initialRoute="Profile"/>
    );
  }
}
