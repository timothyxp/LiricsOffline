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
				{this.props.names == undefined ?
				<Text></Text> :
					this.props.names[0].songs.map((key, index)=>{
					return (
						<View key={index} style={styles.NameSong}>
							<TouchableOpacity style={styles.NameBlock}
							onPress={()=>this.props.goToSong.call(this.props.parent, index)}>
								<Text style={styles.NameText}>{key}</Text>
							</TouchableOpacity>
							{this.props.isDownload ? 
								<TouchableOpacity style={styles.Download}
								onPress={()=>this.props.saveSong.call(this.props.parent, index)}>
									<Image source={require('../../../images/download.png')}
									style={{width: 25,height: 25,}}/>
								</TouchableOpacity>
								:
								undefined
							}
						</View>
					);
				})}
				</ScrollView>
			</View>
		);
	}
}

export default NameSongBox;