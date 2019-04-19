import React from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import TextInput from '../../Pure/TextInput/textinput.js';
import Footer from '../../Pure/Footer/footer.js';
import NameSongBox from '../../Pure/NameSongBox/namesongbox.js';


import server from '../../../../server.json';
import {styles} from './searchstyle.js';

class Search extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	search:'',
	  	data:this.props.data,
	  	artist:this.props.artist
	  };
	}

	handleSearchChange = (text) => {
		this.setState({
			search:text
		});
	}

	handleSearch = () => {
		searchArray=this.state.search.toLowerCase().split(' ');
		search=searchArray.join('_');
		console.log(search);
		fetch(server.adress+`/search/${search}`)
		.then(data=>data.json())
		.then(data=>{
			this.setState({
				data:data,
				artist:search
			});
		})
		.catch(err=>{
			console.log(err);
		})
	}

	goToProfile = () => {
		this.props.router.replace.Profile({},{type:'none'})
	}

	goToOffline = () => {
		this.props.router.replace.Offline({},{type:'none'})
	}

	goToSong = number =>{
		this.props.router.push.Lirics({
			goToProfile:this.goToProfile,
			goToOffline:this.goToOffline,
			data:this.state.data,
			href:this.state.data[0].songs_href[number],
			name:this.state.data[0].songs[number],
			artist:this.state.artist
		},{type:'none'})
	}

	async GetToken(token) {
		try{
			const value = await AsyncStorage.getItem(token);
			console.log('get token', token);
			return value;
		}
		catch{
			console.log('error to get token', token);
		}
	}

	async SetToken(token, data) {
		try{
			await AsyncStorage.setItem(token, data);
			console.log('set token', token);
		}
		catch{
			console.log('cant set token', token);
		}
	}

	saveSong = number => {
		href=this.state.data[0].songs_href[number];
		name=this.state.data[0].songs[number];
		fetch(server.adress+`/lirics/${this.state.artist}/${href}`)
		.then(data=>data.json())
		.then(data=>{
			//this.SetToken('songs', `${this.state.artist}_${name}`);
			this.SetToken(`${this.state.artist}_${name}`, JSON.stringify(data));
		})
		.catch(err=>{
			console.log(err);
		})

	}

	render() {
		return(
			<View style={styles.Search}>
				<View style={styles.SearchInput}>
					<TextInput placegolder='Введите название'
					value={this.state.search}
					onChangeText={this.handleSearchChange}
					onSubmitEditing={this.handleSearch}/>
				</View>
				<View style={styles.Content}>
					<NameSongBox 
					isDownload={true}
					goToSong={this.goToSong}
					saveSong={this.saveSong}
					parent={this}
					names={this.state.data}/>
				</View>
				<Footer 
					active='Search'
					Quit={this.props.router.pop}
					Profile={this.goToProfile}
					Search={()=>{}}
					Offline={this.goToOffline}
				/>
			</View>
		)
	}
}

export default Search;