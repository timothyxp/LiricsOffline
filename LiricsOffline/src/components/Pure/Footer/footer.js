import {View, Text, ImageBackground,
 StyleSheet, TouchableOpacity, Dimensions,Image} from 'react-native';
 import FooterButton from '../FooterButton/footerbutton.js';
import React from 'react';

import {
	OrangeBorderColor,
	FooterHeight
} from '../../../commonstyle.js';

const size=28;

export default class Footer extends React.Component {
	Quit() {
		if (this.props.active==='Quit'){
			return(
				<FooterButton
					onPress={this.props.Quit}
					image="exitActivate"
				/>
			);
		}
		return(
			<FooterButton
				onPress={this.props.Quit}
				image="exit"
			/>
		);
	}

	Offline() {
		if (this.props.active==='Offline'){
			return(
				<FooterButton
					onPress={this.props.Offline}
					image="ConcertsActive"
				/>
			);
		}
		return(
			<FooterButton
					onPress={this.props.Offline}
					image="Concerts"
				/>
		);
	}

	Search() {
		if (this.props.active==='Search'){
			return(
				<FooterButton
					onPress={this.props.Search}
					image="AddActive"
				/>
			);
		}
		return(
			<FooterButton
					onPress={this.props.Search}
					image="Add"
				/>
		);
	}

	Profile() {
		if (this.props.active==='Profile'){
			return(
				<FooterButton
					onPress={this.props.Profile}
					image="ProfileActive"
				/>
			);
		}
		return(
			<FooterButton
					onPress={this.props.Profile}
					image="Profile"
				/>
		);
	}

	render() {
		return(
			<View style={styles.Footer}>
				{this.Quit()}
				{this.Offline()}
				{this.Search()}
				{this.Profile()}
			</View>
		);
	}
}

const Screen_Width = Dimensions.get('window').width;

const styles=StyleSheet.create({
	FooterButton:{
		height:FooterHeight,
		backgroundColor: '#17181c',
		borderTopWidth: 1,
		borderTopColor: '#F26D0C87',
		borderStyle: 'solid',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	Footer:{
		height:FooterHeight,
		width: Screen_Width,
		borderWidth: 0,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
});