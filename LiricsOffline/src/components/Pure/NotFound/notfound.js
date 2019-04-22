import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class NotFound extends React.Component{
	render() {
		return(
			<View style={styles.Content}>
				<Text style={styles.Text}>
				По вашему запросу ничего не найдено
				</Text>
			</View>
		);
	}
}

export default NotFound;

const styles = StyleSheet.create({
	Content:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	Text:{
		fontSize: 15,
		color: '#F6F7FB'
	}
});