import React from 'react';
import {View, Text} from 'react-native';
import Footer from '../../Pure/Footer/footer.js';
import {styles} from './offlinestyle.js';
import SongText from '../../Pure/SongText/songtext.js';
import NameSongBox from '../../Pure/NameSongBox/namesongbox.js';

import {GetToken, GetAllTokens, multiRemove} from '../../../asyncstorage.js';

class Offline extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	text:'',
	  	songs_show:true,
	  	songs:undefined
	  };
	}

	goToProfile = () => {
		this.props.navigation.navigate("Profile",
			{
			type:'none'
		});
	}

	goToSearch = () => {
		this.props.navigation.navigate("Search",
			{
				type:'none'
			}
			);
	}

	goToSong = (number) => {
		token=this.state.songs.songs[number];
		GetToken(token)
		.then(data=>{
			this.props.navigation.navigate("OfflineLirics",
				{
				name:token,
				data:JSON.parse(data),
				goToSearch:this.goToSearch,
				goToProfile:this.goToProfile
			});
		})
	}

	componentDidMount(){
		let name;
		GetAllTokens()
		.then(data=>{
			data.sort((first, second) => {
				return first>second;
			})
			this.setState({
				songs:{
					songs:data
				}
			});
		});
	}

	render() {
		return(
			<View style={styles.Offline}>
				<View style={styles.Content}>
					<View style={styles.Header}>
						<Text style={styles.HeaderText}>
						Загруженное
						</Text>
					</View>
					<View style={styles.SongBox}>
						<NameSongBox
							isDownload={false}
							goToSong={this.goToSong}
							saveSong={this.saveSong}
							parent={this}
							names={this.state.songs}/>
					</View>
				</View>
				<Footer 
					active='Offline'
					Quit={()=>{}}
					Profile={this.goToProfile}
					Search={this.goToSearch}
					Offline ={()=>this.setState({
						songs_show:true
					})}
				/>
			</View>
		);
	}
}

export default Offline;