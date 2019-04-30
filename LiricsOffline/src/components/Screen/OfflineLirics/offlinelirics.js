import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Footer from '../../Pure/Footer/footer.js';
import SongText from '../../Pure/SongText/songtext.js';

import server from '../../../../server.json';

import {styles} from './offlineliricsstyle.js';

class OfflineLirics extends React.Component {
	constructor(props) {
		super(props);

		this.state={
			href:this.props.href,
			artist:this.props.artist,
		}
	}

	goToProfile = () => {
		this.props.router.replace.Profile({
		},{type:'left'});
	}

	goToSearch = () => {
		this.props.router.push.Search({},
		{type:'right'});
	}

	goBack = () => {
		this.props.router.pop({
			type:'top',
			duration:300
		});
	}

	render() {
		return (
			<View style={styles.Lirics}>
				<SongText
					name={this.props.name}
					data={this.props.data}
				/>
				<Footer
					active='Offline'
					Quit={this.props.router.pop}
					Profile={this.goToProfile}
					Search={this.goToSearch}		
					Offline={this.goBack}
				/>
			</View>
		);
	}
}

export default OfflineLirics;