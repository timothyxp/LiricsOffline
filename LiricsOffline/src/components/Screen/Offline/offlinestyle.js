import {StyleSheet} from 'react-native';

import {CommonColor
}from '../../../commonstyle.js';

export const styles = StyleSheet.create({
	'Offline':{
		flex: 1,
		flexDirection: 'column',
		backgroundColor: CommonColor,
		backgroundColor: '#25292F',
	},
	Header:{
		backgroundColor: '#1D1E21',
		flex: 1,
		maxHeight: 70,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 2,
		borderBottomColor: '#ACB0B1',
		borderStyle: 'solid',
		paddingTop:10
	},
	HeaderText:{
		color:'white',
		fontSize: 22,
		fontWeight: "700",
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