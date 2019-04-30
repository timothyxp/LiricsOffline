import {StyleSheet} from 'react-native';

import {
	SongNameColor,
	SongArtistColor, 
	SongBottomColor,
	SongBottomWidth,
	OrangeBorderColor,
	ArtistColor, 
	HeaderTextColor
} from '../../../commonstyle.js';

export const styles=StyleSheet.create({
	"Content":{
		flex: 1,
	},
	ArtistName:{
		flex: 1,
		height: 60,	
		borderBottomWidth: 2,
		borderBottomColor: SongBottomColor,
		borderStyle: 'solid',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
	},
	ArtistNameText:{
		marginLeft:40,
		fontSize: 22,
		color:HeaderTextColor,
		fontWeight: "500",
	},
	ArtistImage:{
		marginLeft: 20,
		width: 40,
		height: 40,
		borderRadius: 20,
		borderWidth: 2,
		borderColor: OrangeBorderColor,
		borderStyle: 'solid',
		backgroundColor: ArtistColor,
	},
	NameSong:{
		flex: 1,
		flexDirection: 'row',
		borderBottomWidth: SongBottomWidth,
		borderBottomColor: SongBottomColor,
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
		color: SongNameColor,
		fontSize: 16,
	},
	ArtistText:{
		color: SongArtistColor,
		fontSize: 12,
	},
	Download:{
		flex: 1,
		flexBasis: 20,
		marginRight: 15,
	}
});