import React from 'react';
import {View} from 'react-native';
import Footer from '../../Pure/Footer/footer.js';
import {styles} from './offlinestyle.js';

class Offline extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return(
			<View style={styles.Offline}>
			<Footer 
				active='Footer'
				Quit={this.props.router.pop}
				Profile={()=>{}}
				Search={this.goToSearch}
				Offline ={this.goToConcerts}
			/>
			</View>
		);
	}
}

export default Offline;