import {View, Text,StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import React from 'react';

const Window_Width = Dimensions.get('window').width

const Emodzi=[
	require('../../../images/Emodzi/1.png'),
	require('../../../images/Emodzi/2.png'),
	require('../../../images/Emodzi/3.png'),
	require('../../../images/Emodzi/4.png'),
	require('../../../images/Emodzi/5.png'),
	require('../../../images/Emodzi/6.png'),
]

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}
  onContentSizeChange = (width,height) => {
		this.refs.ScrollView.scrollTo({x:width});
	}
	render() {
		return (
			<View style={styles.Header}>
				<View style={styles.HR} />
				<ScrollView 
					ref='ScrollView'
					scrollEnabled={false}
					horizontal={true}
					onContentSizeChange={this.onContentSizeChange}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					style = {{paddingTop: 10, paddingBottom: 10}}
				>
				{
					this.props.emodzis.map((emodzi,index)=>{
						return (
							<View key={index}>
								<Image style={styles.Emodzi} source={Emodzi[emodzi]} />
							</View>
						);
					})
				}
				</ScrollView>
				<View style={styles.HR} />
			</View>
		);
	}
}

const Screen_width=Dimensions.get('window').width;

const styles=StyleSheet.create({
	Header:{
		height: 61,
		width:Screen_width,
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		// backgroundColor: 'green',
	},
	HR: {
		width: Window_Width - 14,
		paddingLeft: 7,
		paddingRight: 7,
		height: 1,
		backgroundColor: 'grey',
	},
	Emodzi:{
		height: 40,
		width: 40,
		marginRight: 12,
		marginLeft: 3,
		marginTop:'auto',
		marginBottom: 'auto',
	}
});