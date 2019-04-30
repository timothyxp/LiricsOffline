import {StyleSheet} from 'react-native';

import {CommonColor,
	HeaderColor,
	HeaderBottomColor,
	HeaderTextColor,
	HeaderTextWeight,
	HeaderTextSize
}from '../../../commonstyle.js';

export const styles = StyleSheet.create({
	'Offline':{
		flex: 1,
		flexDirection: 'column',
		backgroundColor: CommonColor,
	},
	Header:{
		backgroundColor: HeaderColor,
		flex: 1,
		maxHeight: 70,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 2,
		borderBottomColor: HeaderBottomColor,
		borderStyle: 'solid',
		paddingTop:10
	},
	HeaderText:{
		color:HeaderTextColor,
		fontSize: HeaderTextSize,
		fontWeight: HeaderTextWeight,
	},
	'Content':{
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	SongBox:{
		flex: 1,
	},
});