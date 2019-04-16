import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react'

export default class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state={
			date:this.props.date,
		}
	}

	format(str) {
		str = str + ''
		while (str.length < 2)
			str = '0' + str
		return str
	}

	formatDate(str) {
		const date = new Date(str)
		return this.format(date.getDate()) + " " + this.monthName(date.getMonth())
			+ " " + this.format(date.getHours()) + ":" + this.format(date.getMinutes())
	}

	componentDidMount() {
		let date=(new Date(this.state.date)-new Date());

		setInterval(()=>{
			this.setState({
				date:this.state.date-1000
			});
		},1000)

		this.setState({
			date:date
		});
	}

	parse = date => {
		date=Math.floor(date);
		let minutes=Math.floor(date/60);
		let hours=Math.floor(minutes/60);
		minutes=minutes%60;
		return (String(hours)+':'+String(minutes)+':'+String(date%60));
	}

	render() {
		let date=this.state.date;
		return(
			<View>
				{
				date>6000000?
				<View style={styles.Counter}
				 type={this.props.type} 
				 onPress={this.props.onClick}>
					<Text>{this.parse(date/1000)}</Text>
				</View>:
				<TouchableOpacity style={styles.Button}
				 type={this.props.type} 
				 onPress={this.props.onClick}>
				 {this.props.children}
				</TouchableOpacity>
				}
			</View>
		);
	}
}

Counter.defaultProps={
	onClick:()=>{}
};

const styles=StyleSheet.create({
	Counter:{
		textAlign:'center',
	  	fontSize: 24,
	  	fontWeight: '700',
		backgroundColor: '#D3B22B',
	  	borderRadius: 5,
	  	padding: 10,
	  	marginTop: 10,
	  	overflow: 'hidden',
	  	justifyContent: 'center',
		alignItems: 'center'
  	},
  	Button:{
		textAlign:'center',
	  	fontSize: 24,
	  	fontWeight: '700',
		backgroundColor: 'green',
	  	borderRadius: 5,
	  	padding: 10,
	  	marginTop: 10,
	  	overflow: 'hidden',
	  	justifyContent: 'center',
		alignItems: 'center'
  	},
});