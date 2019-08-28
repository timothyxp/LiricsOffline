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
			href:this.props.navigation.getParam("href"),
			artist:this.props.navigation.getParam("artist"),
			data:'',
			name:this.props.navigation.getParam("name")
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
		this.props.navigation.goBack()
	};

	render() {
		return (
			<View style={styles.Lirics}>
				<SongText
					name={this.state.name}
					data={this.state.data}
				/>
				<Footer
					active='Search'
					Quit={() => this.props.router.pop}
					Profile={this.props.navigation.getParam("goToProfile")}
					Search={this.goBack}		
					Offline={this.props.navigation.getParam("goToOffline")}
				/>
			</View>
		);
	}
}

export default Lirics;