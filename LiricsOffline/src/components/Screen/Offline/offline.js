import React from 'react';
import {View} from 'react-native';
import Footer from '../../Pure/Footer/footer.js';
import {styles} from './offlinestyle.js';

class Offline extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	goToProfile = () => {
		this.props.router.replace.Profile({
		},{type:'none'});
	}

	goToSearch = () => {
		this.props.router.replace.Search({

		},{type:'none'});
	}

	render() {
		return(
			<View style={styles.Offline}>
				<View style={styles.Content}>
				</View>
				<Footer 
					active='Footer'
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