import React from 'react';
import {View, Text} from 'react-native';
import TextInput from '../../Pure/TextInput/textinput.js';
import Footer from '../../Pure/Footer/footer.js';
import NameSongBox from '../../Pure/NameSongBox/namesongbox.js';

import {SetToken} from '../../../asyncstorage.js';


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
			if(data.result === '404') {
				this.setState({
					data:'404',
					artist:''
				});
				return;
			}
			data=data[0];
			data.songs=data.songs.map(song => String(search+'&'+song));
			
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
		this.props.router.push.Profile({},{type:'right'})
	}

	goToOffline = () => {
		this.props.router.push.Offline({},{type:'left'})
	}

	goToSong = number =>{
		this.props.router.push.Lirics({
			goToProfile:this.goToProfile,
			goToOffline:this.goToOffline,
			data:this.state.data,
			href:this.state.data.songs_href[number],
			name:this.state.data.songs[number],
			artist:this.state.artist
		},{type:'none'})
	}


	saveSong = number => {
		href=this.state.data.songs_href[number];
		name=this.state.data.songs[number];
		fetch(server.adress+`/lirics/${this.state.artist}/${href}`)
		.then(data=>data.json())
		.then(data=>{
			SetToken(`${name}`, JSON.stringify(data));
		})
		.catch(err=>{
			console.log(err);
		})
	}

	render() {
		return(
			<View style={styles.Search}>
				<View style={styles.SearchInput}>
					<TextInput placeholder='Enter artist name'
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