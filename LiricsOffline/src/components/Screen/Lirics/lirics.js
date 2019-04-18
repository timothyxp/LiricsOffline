import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Footer from '../../Pure/Footer/footer.js';

import server from '../../../../server.json';

import {styles} from './liricsstyle.js';

class Lirics extends React.Component {
	constructor(props) {
		super(props);

		this.state={
			href:this.props.href,
			artist:this.props.artist,
			data:''
		}
	}

	componentDidMount() {
		fetch(server.adress+`/lirics/${this.state.artist}/${this.state.href}`)
		.then(data=>data.json())
		.then(data=>{
			this.setState({
				data:data
			});
		})
		.catch(err=>{
			console.log(err);
		})
	}

	render() {
		return (
			<View style={styles.Lirics}>
				<View style={styles.ScrollLirics}>
					<ScrollView>
						<View style={styles.Content}>
							<View style={styles.Original}>
								{this.state.data == '' ?
								<Text></Text>:
								this.state.data[0].original.map((key,index)=>{
									return (
										<View style={styles.Content} key={index}>
											<View style={styles.Original}>
												<Text>
													{key}
												</Text>
											</View>
											<View style={styles.Translate}>
												<Text>
													{this.state.data[0].transkate[index]}
												</Text>
											</View>
										</View>
									)
								})}
							</View>
						</View>
					</ScrollView>
				</View>
				<Footer
					active='Search'
					Quit={this.props.router.pop}
					Profile={this.props.goToProfile}
					Search={this.props.router.pop}
					Offline={this.props.goToOffline}
				/>
			</View>
		);
	}
}

export default Lirics;