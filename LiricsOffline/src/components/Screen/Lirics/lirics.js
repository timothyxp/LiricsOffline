import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Footer from '../../Pure/Footer/footer.js';
import SongText from '../../Pure/SongText/songtext.js';

import server from '../../../../server.json';

import {styles} from './liricsstyle.js';

class Lirics extends React.Component {
	constructor(props) {
		super(props);

		this.state={
			href:this.props.href,
			artist:this.props.artist,
			data:''
		}
	}

	componentDidMount() {
		fetch(server.adress+`/lirics/${this.state.artist}/${this.state.href}`)
		.then(data=>data.json())
		.then(data=>{
			this.setState({
				data:data
			});
		})
		.catch(err=>{
			console.log(err);
		})
	}

	goBack = () => {
		this.props.router.stack[0].replace.Search({
				data:this.props.data,
				artist:this.state.artist
		}, {type:'none'});
	}

	render() {
		return (
			<View style={styles.Lirics}>
				<SongText
					name={this.props.name}
					data={this.state.data}
				/>
				<Footer
					active='Search'
					Quit={this.props.router.pop}
					Profile={this.props.goToProfile}
					Search={this.goBack}		
					Offline={this.props.goToOffline}
				/>
			</View>
		);
	}
}

export default Lirics;