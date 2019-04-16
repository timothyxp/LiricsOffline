import React from 'react';
import {View, Text} from 'react-native';
import TextInput from '../../Pure/TextInput/textinput.js';
import Footer from '../../Pure/Footer/footer.js';

import {styles} from './searchstyle.js';

class Search extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	search:''
	  };
	}

	handleSearchChange = (text) => {
		this.setState({
			search:text
		});
	}

	handleSearch = () => { 
		//get
	}

	goToProfile = () => {
		this.props.router.replace.Profile({},{type:'none'})
	}

	render() {
		return(
			<View style={styles.Search}>
				<TextInput placegolder='Введите название'
				value={this.state.search}
				onChangeText={this.handleSearchChange}
				onSubmitEditing={this.handleSearch}/>
				<View style={styles.Content}>
				</View>
				<Footer 
					active='Search'
					Quit={this.props.router.pop}
					Profile={this.goToProfile}
					Search={()=>{}}
					Concert ={()=>{}}
				/>
			</View>
		)
	}
}

export default Search;