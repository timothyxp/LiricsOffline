import {StyleSheet, Dimensions} from 'react-native';

const Screen_width=Dimensions.get('window').width;

export const styles=StyleSheet.create({
	Profile:{
		flexDirection: 'column',
		flex: 1,
		backgroundColor: '#20242d',
	},
	Self:{
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexGrow:5
	},
	Stats:{
		flexGrow:1,
		flexDirection: 'row',
	},
	Concerts:{
		width:Screen_width/2,
		borderRightWidth:1 ,
		borderColor: 'black',
		borderStyle: 'solid',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	Emodzi:{
		paddingHorizontal: 15,
		width:Screen_width/2,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	CategoryText:{
		textAlign:'right'
	},
	About:{
		color:'#8f929b',
		textAlign: 'center',
		paddingLeft: 40,
		paddingRight: 40,
		paddingTop: 10,
		paddingBottom: 10,
	},
	Category:{
		color:'#8f929b',
		textAlign: 'center',
		fontSize: 18,
		textAlign:'right'
	},
	Icon:{
		borderRadius: 56,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'white',
		borderStyle: 'solid',
		marginTop: 40,
		padding: 3,
	},
	Content:{
		flex: 1,
		flexDirection: 'column',
		marginBottom: 10,
	},
	Count:{
		color:'white',
		textAlign: 'center',
		fontSize: 20,
		textAlign:'right'
	},
	Name:{
		color:'white',
		textAlign: 'center',
		fontSize: 24,
		padding: 3,
	},
	Header:{
		flexGrow:1,
		alignSelf: 'flex-start',
		width:Screen_width,
		padding: 3,
	},
	Heading: {
		fontSize: 28,
		color: 'white',
		fontWeight: '400',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,
		paddingBottom: 10,
		textAlign: 'center',
		padding: 3,
	}
});
