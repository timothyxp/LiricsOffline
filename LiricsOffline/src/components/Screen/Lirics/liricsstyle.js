import {StyleSheet, Dimensions} from 'react-native';

const Screen_Width = Dimensions.get('window').width;

export const styles=StyleSheet.create({
	Lirics:{
		flex: 1,
		marginTop: 20,
		backgroundColor: '#eee',
	},
	ScrollLirics:{
		flex: 1,
		marginTop: 40,
	},
	Content:{
		flex: 1,
		flexDirection: 'row',
	},
	Original:{
		flex: 1,
		width: Screen_Width/2,
		borderRightWidth: 1,
		borderRightColor: '#BBBEC3',
		borderStyle: 'solid',
		paddingRight: 5,
		paddingLeft: 5,
		paddingTop: 5,
		paddingBottom:5,
		borderBottomWidth: 1,
		borderBottomColor: '#DDDCDD',
		borderStyle: 'solid',
	},
	Translate:{
		flex: 1,
		width: Screen_Width/2,
		paddingRight: 5,
		paddingLeft: 5,
		paddingTop: 5,
		paddingBottom:5,
		borderBottomWidth: 1,
		borderBottomColor: '#DDDCDD',
		borderStyle: 'solid',
	},
})