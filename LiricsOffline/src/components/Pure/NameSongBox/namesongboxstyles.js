import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	NameBox:{
		flex: 1,
		flexDirection: 'column',

	},
	NameSong:{
		flex: 1,
		flexDirection: 'row',
		borderBottomWidth: 2,
		borderBottomColor: '#2C3036',
		borderStyle: 'solid',
		height: 50,
		alignItems: 'center',
	},
	NameBlock:{
		flex: 1,
		flexBasis: 290,
		marginLeft: 20,
	},
	NameText:{
		color: '#BBBEC3',
		fontSize: 15,
	},
	Download:{
		flex: 1,
		flexBasis: 20,
		color: '#BBBEC3',
		marginRight: 15,
	}
});