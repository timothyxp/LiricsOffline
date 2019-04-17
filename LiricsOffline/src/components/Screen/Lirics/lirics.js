import React from 'react';
import {View, Text} from 'react-native';
import Footer from '../../Pure/Footer/footer.js';

import server from '../../../../server.json';

import {styles} from 'liricsstyle.js';

class Lirics extends React.Component {
	constructor(props) {
		super(props);

		this.state={
			href:this.props.href,
			artist:this.props.artist
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<View style={styles.Lirics}>
				<View style={styles.Content}>
				</View>
				<Footer
					active='Search'
					Quit={this.props.router.pop}
					Profile={this.props.goToProfile}
					Search={()=>{}}
					Offline={this.props.goToOffline}
				/>
			</View>
		);
	}
}

export default Lirics;