import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Footer from '../../Pure/Footer/footer.js';
import SongText from '../../Pure/SongText/songtext.js';

import server from '../../../../server.json';

import {styles} from './offlineliricsstyle.js';

class OfflineLirics extends React.Component {
	goBack = () => {
		this.props.navigation.goBack();
	};

	render() {
		return (
			<View style={styles.Lirics}>
				<SongText
					name={this.props.navigation.getParam("name")}
					data={this.props.navigation.getParam("data")}
				/>
				<Footer
					active='Offline'
					Quit={()=>this.props.router.pop}
					Profile={this.props.navigation.getParam("goToProfile")}
					Search={this.props.navigation.getParam("goToSearch")}
					Offline={this.goBack}
				/>
			</View>
		);
	}
}

export default OfflineLirics;