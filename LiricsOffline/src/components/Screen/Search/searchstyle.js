import {StyleSheet} from 'react-native';

import {CommonColor
}from '../../../commonstyle.js';

export const styles = StyleSheet.create({
	Search:{
		flex: 1,
		flexDirection: 'column',
		backgroundColor: CommonColor,
	},
	Content:{
		flex: 1,
		flexDirection: 'column',
	},
	ContentKeyboard:{
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'rgba(255,255,255,0.3)'
	},
	SearchInputBlock:{
		marginTop: 30,
		marginRight: 15,
		marginLeft: 15,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	SearchInput:{
		borderRadius: 20,
		backgroundColor: 'white',
		width: 300,
		height: 40,
		alignItems: 'center',
		flexDirection: 'row'
	},
	SearchIcon:{
		fontSize: 24,
		marginLeft: 15,
	},
	TextInput:{
		flex: 1,
		marginLeft: 7,
	}
});