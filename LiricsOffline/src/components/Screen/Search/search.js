import React from 'react';
import {View, Text, TextInput, Keyboard, TouchableOpacity} from 'react-native';
//import TextInput from '../../Pure/TextInput/textinput.js';
import Footer from '../../Pure/Footer/footer.js';
import NameSongBox from '../../Pure/NameSongBox/namesongbox.js';

import {PacmanIndicator} from 'react-native-indicators';

import {SetToken} from '../../../asyncstorage.js';


import server from '../../../../server.json';
import {styles} from './searchstyle.js';

import Icon from 'react-native-vector-icons/Ionicons';

import * as Animatable from 'react-native-animatable';


class Search extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
		  search:'',
		  lastSearch:'',
	  	data:this.props.data,
	  	artist:this.props.artist,
	  	isKeyboard:false,
	  	isLoading:false,
	  };
	}

	componentDidMount() {
		this.keyboard_did_show = Keyboard.addListener("keyboardDidShow", this.keyboardDidShow);
		this.keyboard_will_show = Keyboard.addListener("keyboardWillShow", this.keyboardWillShow);
		this.keyboard_will_hide = Keyboard.addListener("keyboardWillHide", this.keyboardWillHide);
	}

	keyboardDidShow = () => {
		this.setState({
			isKeyboard:true
		});
	}

	keyboardWillShow = () => {
		this.setState({
			isKeyboard:true
		});
	}

	keyboardWillHide = () => {
		this.setState({
			isKeyboard:false
		});
	}

	handleSearchChange = (text) => {
		this.setState({
			search:text
		});
	}

	searchValidation = () => {
		if (this.state.search === this.state.lastSearch || this.state.search==="")
			return false;
		return true;
	} 

	handleSearch = () => {
		if(!this.searchValidation())
			return;
		new_data = this.state.data === "404" ? undefined : this.state.data;
		this.setState({
			isLoading: true,
			data:new_data
		});
		search = this.state.search;
		let index=this.state.search.length-1;
		while(index !== -1 && search[index]===' ')
			index--;
		search = search.substring(0, index + 1);

		searchArray=search.toLowerCase().split(' ');
		search=searchArray.join('_'); 
		console.log(search);
		fetch(server.adress+`/search/${search}`)
		.then(data=>data.json())
		.then(data=>{
			console.log(data);
			if(data.result === '404' || data.result === undefined) {
				this.setState({
					data:'404',
					artist:'',
					isLoading: false
				});
				return;
			}
			data=data[0];
			data.songs=data.songs.map(song => String(search+'&'+song));
			
			setTimeout(() => {
				this.setState({
					data:data,
					artist:search,
					isLoading: false
				});
			}, 2000);
		})
		.catch(err=>{
			console.log(err);
		})
	}

	goToProfile = () => {
		this.props.navigation.navigate(
			"Profile",
			{type:'none'}
			);
	}

	goToOffline = () => {
		this.props.navigation.navigate(
			"Offline",
			{type:'none'}
			);
	}

	goToSong = number =>{
		this.props.navigation.push("Lirics",
			{
			goToProfile:this.goToProfile,
			goToOffline:this.goToOffline,
			data:this.state.data,
			href:this.state.data.songs_href[number],
			name:this.state.data.songs[number],
			artist:this.state.artist
		},{
			type:'bottom',
			duration: 300
		});
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
				<View style={styles.SearchInputBlock}>
					<Animatable.View animation="slideInRight" duration={1500} style={styles.SearchInput}>
						<TouchableOpacity onPress={()=>Keyboard.dismiss()}>
								<Animatable.View animation={this.state.isKeyboard ? "fadeInLeft" : "fadeInRight"}
								duration={400}>
									<Icon name={this.state.isKeyboard ? "md-arrow-back" : "ios-search"}
									 style={styles.SearchIcon}/>
								</Animatable.View>
						</TouchableOpacity>
						<TextInput placeholder='Enter artist name'
						style={styles.TextInput}
						value={this.state.search}
						onChangeText={this.handleSearchChange}
						onSubmitEditing={this.handleSearch}/>
					</Animatable.View>
				</View>
				{this.state.isLoading ? <View style={{height: 100,}}>
						<PacmanIndicator color='white' size={70}/>
				</View> : undefined}
				<View style={this.state.isKeyboard ? styles.ContentKeyboard : styles.Content}>
					<NameSongBox 
					isDownload={true}
					goToSong={this.goToSong}
					saveSong={this.saveSong}
					parent={this}
					names={this.state.data}/>
				</View>
				<Footer 
					active='Search'
					Quit={()=>this.props.router.pop}
					Profile={this.goToProfile}
					Search={()=>{}}
					Offline={this.goToOffline}
				/>
			</View>
		)
	}
}

export default Search;