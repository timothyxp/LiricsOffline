import {View, Text, ImageBackground,
 StyleSheet, TouchableOpacity, Dimensions,Image} from 'react-native';
import React from 'react';

const size=28;
const FooterHeight = 72;

export default class Footer extends React.Component {
	Quit() {
		if (this.props.active==='Quit'){
			return(
				<TouchableOpacity style={styles.FooterButton}
				onPress={()=>this.props.Quit()}>
					<ImageBackground source={require('../../../images/exitActive.png')}
					style={{width:size,height:size}}>	
					</ImageBackground>
				</TouchableOpacity>
			);
		}
		return(
			<TouchableOpacity style={styles.FooterButton}
			onPress={()=>this.props.Quit()}>
				<ImageBackground source={require('../../../images/exit.png')}
				style={{width:size,height:size}}>	
				</ImageBackground>
			</TouchableOpacity>
		);
	}

	Offline() {
		if (this.props.active==='Offline'){
			return(
				<TouchableOpacity style={styles.FooterButton}
				onPress={()=>this.props.Offline()}>
					<ImageBackground source={require('../../../images/ConcertsActive.png')}
					style={{width:size,height:size}}>	
					</ImageBackground>
				</TouchableOpacity>
			);
		}
		return(
			<TouchableOpacity style={styles.FooterButton}
			onPress={()=>this.props.Offline()}>
				<ImageBackground source={require('../../../images/Concerts.png')}
				style={{width:size,height:size}}>	
				</ImageBackground>
			</TouchableOpacity>
		);
	}

	Search() {
		if (this.props.active==='Search'){
			return(
				<TouchableOpacity style={styles.FooterButton}
				onPress={()=>this.props.Search()}>
					<ImageBackground source={require('../../../images/AddActive.png')}
					style={{width:size,height:size}}>	
					</ImageBackground>
				</TouchableOpacity>
			);
		}
		return(
			<TouchableOpacity style={styles.FooterButton}
			onPress={()=>this.props.Search()}>
				<ImageBackground source={require('../../../images/Add.png')}
				style={{width:size,height:size}}>	
				</ImageBackground>
			</TouchableOpacity>
		);
	}

	Profile() {
		if (this.props.active==='Profile'){
			return(
				<TouchableOpacity style={styles.FooterButton}
				onPress={()=>this.props.Profile()}>
					<ImageBackground source={require('../../../images/ProfileActive.png')}
					style={{width:size,height:size}}>	
					</ImageBackground>
				</TouchableOpacity>
			);
		}
		return(
			<TouchableOpacity style={styles.FooterButton}
			onPress={()=>this.props.Profile()}>
				<ImageBackground source={require('../../../images/Profile.png')}
				style={{width:size,height:size}}>	
				</ImageBackground>
			</TouchableOpacity>
		);
	}

	render() {
		return(
			<View style={styles.Footer}>
				{this.Quit()}
				{this.Offline()}
				{this.Search()}
				{this.Profile()}
			</View>
		);
	}
}

const Screen_Width = Dimensions.get('window').width;

const styles=StyleSheet.create({
	FooterButton:{
		height:FooterHeight,
		backgroundColor: '#17181c',
		borderTopWidth: 1,
		borderTopColor: '#F26D0C87',
		borderStyle: 'solid',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	Footer:{
		height:FooterHeight,
		width: Screen_Width,
		borderWidth: 0,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
});