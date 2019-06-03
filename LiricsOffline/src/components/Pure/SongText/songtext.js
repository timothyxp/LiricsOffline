import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView, ImageBackground} from 'react-native';

const Screen_Width = Dimensions.get('window').width;
const Screen_Height = Dimensions.get('window').height;

class SongText extends React.Component {
	render() {
		return(
			<View style={styles.ScrollLirics}>
				<ImageBackground source={require('../../../images/fon.jpg')}
				style={{width:Screen_Width, height:Screen_Height}}>
				<ScrollView>
					<View style={styles.Name}>
						<Text style={styles.NameText}>
							{this.props.name.split('&')[1]}
						</Text>
					</View>
					<View style={styles.Content}>
						{this.props.data == '' ?
						undefined:
						this.props.data.original.map((key,index)=>{
							return (
								<View style={styles.TranslateBlock} key={index}>
									<View style={styles.Original}>
										<Text>
											{key}
										</Text>
									</View>
									<View style={styles.Translate}>
										<Text>
											{this.props.data.transkate[index]}
										</Text>
									</View>
								</View>
							)
						})}
					</View>
					<View style={styles.Space}>
					</View>
				</ScrollView>
				</ImageBackground>
			</View>
		);
	}
}

export default SongText;

const styles=StyleSheet.create({
	Name:{
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#BBBEC3FF',
		borderStyle: 'solid',
		paddingTop:5
	},
	NameText:{
		fontSize: 20,
		fontWeight: "500",
		color: '#000000',
	},
	ScrollLirics:{
		flex: 1
	},
	Content:{
		flex: 1,
		flexDirection: 'column',
	},
	TranslateBlock:{
		flex: 1,
		flexDirection: 'row',
	},
	Original:{
		flexBasis: Screen_Width/2,
		borderRightWidth: 1,
		borderRightColor: '#BBBEC3FF',
		borderStyle: 'solid',
		paddingRight: 5,
		paddingLeft: 5,
		paddingTop: 5,
		paddingBottom:5,
		borderBottomWidth: 1,
		borderBottomColor: '#DDDCDDFF',
		borderStyle: 'solid',
	},
	Translate:{
		flexBasis: Screen_Width/2,
		paddingRight: 5,
		paddingLeft: 5,
		paddingTop: 5,
		paddingBottom:5,
		borderBottomWidth: 1,
		borderBottomColor: '#DDDCDDFF',
		borderStyle: 'solid',
	},
	Space:{
		height: 105,
	}
})