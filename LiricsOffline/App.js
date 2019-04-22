import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Router from 'react-native-easy-router';
import Profile from './src/components/Screen/Profile/profile.js';
import Search from './src/components/Screen/Search/search.js';
import Offline from './src/components/Screen/Offline/offline.js';
import Lirics from './src/components/Screen/Lirics/lirics.js';
const routes = {Profile, Search, Offline, Lirics};

const { width, height } = Dimensions.get('window')
const animations = {
  'skew-fade': [
    { transform: [{ skewX: '90deg' }], opacity: 0 },
    { transform: [{ skewX: '0deg' }], opacity: 1 },
    false,
    { transform: [{ translateX: -width / 3 }], opacity: 0 },
    { transform: [{ translateX: 0 }], opacity: 1 },
  ]
}

export default class App extends React.Component {
  	render() {
    	return (
    		<View style={styles.App}>
      			<Router routes={routes} animations={animations} initialRoute="Search"/>
      		</View>
    	);
  }
}

const styles=StyleSheet.create({
	App:{
		flex: 1,
		backgroundColor: '#20242d',
	}
})
