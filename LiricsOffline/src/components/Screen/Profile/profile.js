import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';

import {styles} from './profilestyles.js' 

import Footer from '../../Pure/Footer/footer.js';

import config from '../../../../app.json';

export default class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state={
			socket:this.props.socket
		};
	}

	goToOffline = () => {
		this.props.router.replace.Offline({
		},{type:'left'});
	}

	goToSearch = () => {
		this.props.router.replace.Search({},{type:'left'})
	}

	render() {
		return(
			<View style={styles.Profile}>
				<View style={styles.Content}>
					<View style={styles.Header}>
						<Text style={styles.HeaderText}>
						Профиль
						</Text>
					</View>
					<View style={styles.Self}>		
						<Text style={styles.Name}>Тимофей Смирнов</Text>
						<View style={styles.Icon}>
							<Image source={require('../../../images/user.png')}
							style={{width: 100,height: 100,}}/>
						</View>
					</View>
					<View style={styles.Config}>
						<Text style={styles.Version}>v.{config.expo.version}</Text>
					</View>
					<View style={styles.Stats}>
						<View style={styles.Concerts}>
							<Image source={require('../../../images/friends.png')}
							style={{width: 50,height: 50,}}/>
							<View style={styles.CategoryText}>
								<Text style={styles.Category}>Друзья</Text>
								<Text style={styles.Count}>69</Text>
							</View>
						</View>
						<View style={styles.Emodzi}>
							<Image source={require('../../../images/micro.png')}
							style={{width: 50,height: 50,}}/>
							<View style={styles.CategoryText}>
								<Text style={styles.Category}>Исполнители</Text>
								<Text style={styles.Count}>228</Text>
							</View>
						</View>
					</View>
					<View style={styles.Stats}>
						<View style={styles.Concerts}>
							<Image source={require('../../../images/Concerts.png')}
							style={{width: 50,height: 50,}}/>
							<View style={styles.CategoryText}>
								<Text style={styles.Category}>Концерты</Text>
								<Text style={styles.Count}>47</Text>
							</View>
						</View>
						<View style={styles.Emodzi}>
							<Image source={require('../../../images/emodzi.png')}
							style={{width: 50,height: 50,}}/>
							<View style={styles.CategoryText}>
								<Text style={styles.Category}>Эмоции</Text>
								<Text style={styles.Count}>322</Text>
							</View>
						</View>
					</View>
				</View>
			<Footer 
				active="Profile"
				Quit={this.props.router.pop}
				Profile={()=>{}}
				Search={this.goToSearch}
				Offline ={this.goToOffline}
			/>
			</View>
		);
	}
}
