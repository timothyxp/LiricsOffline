import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';

import {styles} from './namesongboxstyles.js';

class NameSongBox extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return( 
			<View style={styles.NameBox}>	
				<ScrollView>
				{this.props.names == '' ?
				<Text></Text> :
					this.props.names[0].songs.map((key, index)=>{
					return (
						<View key={index} style={styles.NameSong}>
							<TouchableOpacity style={styles.NameBlock}>
								<Text style={styles.NameText}>{key}</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.Download}>
								<Image source={require('../../../images/download.png')}
								style={{width: 25,height: 25,}}/>
							</TouchableOpacity>
						</View>
					);
				})}
				</ScrollView>
			</View>
		);
	}
}

export default NameSongBox;