import React from 'react';
import {View, AsyncStorage, Text} from 'react-native';
import Footer from '../../Pure/Footer/footer.js';
import {styles} from './offlinestyle.js';
import SongText from '../../Pure/SongText/songtext.js';
import NameSongBox from '../../Pure/NameSongBox/namesongbox.js';

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
		this.props.router.replace.Profile({
		},{type:'none'});
	}

	goToSearch = () => {
		this.props.router.replace.Search({
		},{type:'none'});
	}

	async GetToken(token) {
		try{
			const value = await AsyncStorage.getItem(token);
			return value;
		}
		catch(error){
			console.log(error);
		}
	}

	async GetAllTokens() {
		try{
			const value = await AsyncStorage.getAllKeys();
			return value;
		}
		catch(error){
			console.log(error);
		}
	}

	async SetToken(token, data) {
		try{
			await AsyncStorage.setItem(token, data);
			console.log('set token', token);
		}
		catch(error){
			console.log(error);
		}
	}

	goToSong = (number) => {
		token=this.state.songs[0].songs[number];
		this.GetToken(token)
		.then(data=>{
			this.setState({
				text:JSON.parse(data),
				name:token,
				songs_show:false
			});
		})
	}

	componentDidMount(){
		let name;
		this.GetAllTokens().
		then(data=>{
			this.setState({
				songs:[{
					songs:data
				}]
			});
		});
		/*then(data=>{
			console.log(data);
			name=data.split('_').pop();
			return this.GetToken(data);
		})
		.then(data=>{
			this.setState({
				text:JSON.parse(data),
				name:name
			});
		})*/
	}

	render() {
		return(
			<View style={styles.Offline}>
				<View style={styles.Content}>
					{this.state.songs_show ? 
						<View style={styles.SongBox}>
							<NameSongBox
								isDownload={false}
								goToSong={this.goToSong}
								saveSong={this.saveSong}
								parent={this}
								names={this.state.songs}/>
						</View>
						:
						<SongText
							name={this.state.name}
							data={this.state.text}
						/>
					}
				</View>
				<Footer 
					active='Offline'
					Quit={this.props.router.pop}
					Profile={this.goToProfile}
					Search={this.goToSearch}
					Offline ={()=>{}}
				/>
			</View>
		);
	}
}

export default Offline;