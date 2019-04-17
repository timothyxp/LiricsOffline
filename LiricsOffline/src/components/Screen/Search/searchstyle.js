import {StyleSheet} from 'react-native';

import {CommonColor
}from '../../../commonstyle.js';

export const styles = StyleSheet.create({
	Search:{
		flex: 1,
		flexDirection: 'column',
		backgroundColor: CommonColor, 
		backgroundColor: '#25292F',
	},
	Content:{
		flex: 1,
		flexDirection: 'column',
	},
	SearchInput:{
		marginTop: 30,
		marginRight: 15,
		marginLeft: 15,
		borderWidth: 1,
		borderColor: '#25292F',
		borderStyle: 'solid',	
	}
});