import {StyleSheet, Dimensions} from 'react-native';

const Screen_Width = Dimensions.get('window').width;

import {
	LiricsBackground,
	LiricsRightBackground,
	LiricsBottomBackground
} from '../../../commonstyle.js';

export const styles=StyleSheet.create({
	Lirics:{
		flex: 1,
		marginTop: 20,
		backgroundColor: LiricsBackground,
	},
})