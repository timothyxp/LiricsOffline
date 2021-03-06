import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';

import {styles} from './namesongboxstyles.js';
import NotFound from '../NotFound/notfound.js';
import Artists from '../Artists/artists.js';

class NameSongBox extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	update() {
		if(this.props.names === undefined || this.props.names === "404")
			return;
		artist_songs = {
		};
		this.props.names.songs.map((key, index) => {
			name=key.split('&');
			artist=name[0]
			name=name[1];
			if(artist_songs[artist] === undefined) {
				artist_songs[artist] = [];
			}
			artist_songs[artist].push({
				name:name,
				index:index
			});
		});

		this.artist_songs = artist_songs;
	}

	render() {
		this.update();
		return( 
			<View style={styles.NameBox}>	
				{ this.props.names === '404' ?
				<NotFound/>:
				this.artist_songs === undefined ?
				undefined :
				<ScrollView>
					{Object.keys(this.artist_songs).map((key, index) =>{
						return(
							<Artists name={key} key={index} 
							songs={this.artist_songs[key]} 
							parent={this.props.parent}
							goToSong={this.props.goToSong}
							isDownload={this.props.isDownload}
							saveSong={this.props.saveSong}
							/>
						);
						})

					}
				</ScrollView>
				}
			</View>
		);
	}
}

export default NameSongBox;