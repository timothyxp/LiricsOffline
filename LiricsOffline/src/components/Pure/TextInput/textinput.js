import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

class Input extends React.Component {
	render() {
		return(
			<TextInput style={styles.TextInput}
			placeholder={this.props.placeholder}
			value={this.props.value}
			onChangeText={this.props.onChangeText}
			onSubmitEditing={this.props.onSubmitEditing}
			/>
		);
	}
};

export default Input;

Input.defaultProps={
	placeholder:'',
	value:'',
	onSubmitEditing:()=>{},
	onChangeText:()=>{}
};

const styles=StyleSheet.create({
	TextInput:{
		backgroundColor: '#eee',
		opacity: .8,
		paddingVertical: 12,
		paddingHorizontal: 15,
		marginVertical: 8,
		marginHorizontal: 0,
		width: '100%',
	}
});