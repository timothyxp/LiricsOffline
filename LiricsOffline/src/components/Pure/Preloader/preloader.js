import {Animated, View, Text, ImageBackground,
 StyleSheet, TouchableOpacity, Dimensions,Image, ActivityIndicator} from 'react-native';
import React, { Component } from 'react';

const Screen_Width = Dimensions.get('window').width;

export default class Preloader extends Component {
	render() {
		return (
			<View style={styles.PreloaderBase}>
				<View style={styles.PreloaderInner}>
					<ActivityIndicator color={'#21D4FD'} size={50} />
					<View style={{
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'space-around',
						width: 50,
						flex: 1
					}}>
						<Text style={styles.PreloaderLabel}>Loading...</Text>
					</View>
				</View>
			</View>
		)
	}
}

const styles=StyleSheet.create({
	PreloaderBase: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: Screen_Width
	},
	PreloaderInner: {
		flexDirection: 'row',
		width: 200
	},
	Spinner: {
		borderRadius: 30,
		width: 60,
		height: 60,
		borderTopWidth: 4,
		borderColor: 'grey'
	},
	PreloaderLabel: {
		color: 'grey'
	}
});