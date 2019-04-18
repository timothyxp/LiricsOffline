import React from 'react';
import {TouchableOpacity, ImageBackground, StyleSheet} from 'react-native';

const size=28;

class FooterButton extends React.Component {
	render() {
		return (
			<TouchableOpacity style={styles.FooterButton}
				activeOpacity={1.0}
				onPress={()=>this.props.onPress()}>
				{
					this.props.image=='exit'?
					<ImageBackground source={require('../../../images/exit.png')}
						style={{width:size,height:size}}>	
					</ImageBackground> 
					:this.props.image=='exitActivate'?
					<ImageBackground source={require('../../../images/exitActive.png')}
						style={{width:size,height:size}}>	
					</ImageBackground>
					:this.props.image=='ConcertsActive'?
					<ImageBackground source={require('../../../images/ConcertsActive.png')}
						style={{width:size,height:size}}>	
					</ImageBackground>
					:this.props.image=='Concerts'?
					<ImageBackground source={require('../../../images/Concerts.png')}
						style={{width:size,height:size}}>	
					</ImageBackground>
					:this.props.image=='Add'?
					<ImageBackground source={require('../../../images/Add.png')}
						style={{width:size,height:size}}>	
					</ImageBackground>
					:this.props.image=='AddActive'?
					<ImageBackground source={require('../../../images/AddActive.png')}
						style={{width:size,height:size}}>	
					</ImageBackground>
					:this.props.image=='Profile'?
					<ImageBackground source={require('../../../images/Profile.png')}
						style={{width:size,height:size}}>	
					</ImageBackground>
					:
					<ImageBackground source={require('../../../images/ProfileActive.png')}
						style={{width:size,height:size}}>	
					</ImageBackground>
				}
			</TouchableOpacity>
		);
	}
};

export default FooterButton;

const FooterHeight = 72;

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
})