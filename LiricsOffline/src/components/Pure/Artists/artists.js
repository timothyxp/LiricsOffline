import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './artistsstyle.js';

class Artists extends React.Component {
	constructor(props) {
		super(props);

		this.state={
			show:false,
		};
	}

	setShowable = () => {
		this.setState({
			show:!this.state.show
		});
	}

	render() {
		return(
			<View style={styles.Content}>
				<TouchableOpacity style={styles.ArtistName}
				onPress={()=>this.setShowable()}>
					<View style={styles.ArtistImage}>
					</View>
					<Text style={styles.ArtistNameText}>
						{this.props.name}
					</Text>
				</TouchableOpacity>
				{!this.state.show ? 
				undefined : 
					this.props.songs.map((key, index)=>{
					name=key;
					artist=this.props.name;
					return (
						<View key={index} style={styles.NameSong}>
							<TouchableOpacity style={styles.NameBlock}
							onPress={()=>this.props.goToSong.call(this.props.parent, index)}>
								<Text style={styles.NameText}>{name}</Text>
								<Text style={styles.ArtistText}>{artist}</Text>
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
			</View>
		);
	}
}

export default Artists;