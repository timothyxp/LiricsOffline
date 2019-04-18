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

	async GetToken(token) {
		try{
			const token = await AsyncStorage.getItem('@storage:'+token);
			return token;
		}
		catch{
			console.log('error to get token', token);
		}
	}

	async SetToken(token, data) {
		try{
			await AsyncStorage.setItem('@storage:'+token, data);
			console.log('set token', token);
		}
		catch{
			console.log('cant set token', token);
		}
	}

	componentDidMount(){
		this.GetToken('song').
		then(data=>{
			console.log(data);
		})
	}

	render() {
		return(
			<View style={styles.Offline}>
				<View style={styles.Content}>
				</View>
				<Footer 
					active='Offline'
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