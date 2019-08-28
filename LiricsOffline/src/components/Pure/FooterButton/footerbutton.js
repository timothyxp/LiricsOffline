import React from 'react';
import {TouchableOpacity, ImageBackground, StyleSheet} from 'react-native';
import {FooterHeight, FooterButtonSize} from '../../../commonstyle';

class FooterButton extends React.Component {
	render() {
		return (
			<TouchableOpacity style={styles.FooterButtonBlock}
				activeOpacity={1.0}
				onPress={()=>this.props.onPress()}>
				{
					this.props.image=='exit'?
					<ImageBackground source={require('../../../images/Subscribe.png')}
					style={styles.FooterButton}>	
					</ImageBackground> 
					:this.props.image=='exitActivate'?
					<ImageBackground source={require('../../../images/SubscribeActive.png')}
					style={styles.FooterButton}>	
					</ImageBackground>
					:this.props.image=='ConcertsActive'?
					<ImageBackground source={require('../../../images/MusicActive.png')}
					style={styles.FooterButton}>		
					</ImageBackground>
					:this.props.image=='Concerts'?
					<ImageBackground source={require('../../../images/Music.png')}
					style={styles.FooterButton}>	
					</ImageBackground>
					:this.props.image=='Add'?
					<ImageBackground source={require('../../../images/Add.png')}
					style={styles.FooterButton}>	
					</ImageBackground>
					:this.props.image=='AddActive'?
					<ImageBackground source={require('../../../images/AddActive.png')}
					style={styles.FooterButton}>	
					</ImageBackground>
					:this.props.image=='Profile'?
					<ImageBackground source={require('../../../images/Profile.png')}
					style={styles.FooterButton}>	
					</ImageBackground>
					:
					<ImageBackground source={require('../../../images/ProfileActive.png')}
					style={styles.FooterButton}>	
					</ImageBackground>
				}
			</TouchableOpacity>
		);
	}
};

export default FooterButton;

const styles=StyleSheet.create({
	FooterButtonBlock:{
		height:FooterHeight,
		backgroundColor: '#17181c',
		borderTopWidth: 1,
		borderTopColor: '#F26D0C87',
		borderStyle: 'solid',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	FooterButton:{
		width: FooterButtonSize,
		height: FooterButtonSize
	}
})