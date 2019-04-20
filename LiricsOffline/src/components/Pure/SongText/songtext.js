import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';

class SongText extends React.Component {
	render() {
		return(
			<View style={styles.ScrollLirics}>
					<View style={styles.Name}>
						<Text style={styles.NameText}>
							{this.props.name.split('&')[1]}
						</Text>
					</View>
					<ScrollView>
						<View style={styles.Content}>
							<View style={styles.Original}>
								{this.props.data == '' ?
								undefined:
								this.props.data[0].original.map((key,index)=>{
									return (
										<View style={styles.Content} key={index}>
											<View style={styles.Original}>
												<Text>
													{key}
												</Text>
											</View>
											<View style={styles.Translate}>
												<Text>
													{this.props.data[0].transkate[index]}
												</Text>
											</View>
										</View>
									)
								})}
							</View>
						</View>
					</ScrollView>
				</View>
		);
	}
}

export default SongText;

const Screen_Width = Dimensions.get('window').width;

const styles=StyleSheet.create({
	Name:{
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 10,
		borderBottomWidth: 2,
		borderBottomColor: '#BBBEC3',
		borderStyle: 'solid',
	},
	NameText:{
		fontSize: 20,
		fontWeight: "500",
	},
	ScrollLirics:{
		flex: 1,
		backgroundColor: '#eee',
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