import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Router from 'react-native-easy-router';
import Profile from './src/components/Screen/Profile/profile.js';
import Search from './src/components/Screen/Search/search.js';
import Offline from './src/components/Screen/Offline/offline.js';
import Lirics from './src/components/Screen/Lirics/lirics.js';
import OfflineLirics from './src/components/Screen/OfflineLirics/offlinelirics.js';
const routes = {Profile, Search, Offline, Lirics, OfflineLirics};

const { width, height } = Dimensions.get('window')

export default class App extends React.Component {
  	render() {
    	return (
    		<View style={styles.App}>
      			<Router routes={routes} initialRoute="Search"/>
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
