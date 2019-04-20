import {AsyncStorage} from 'react-native';

export async function GetToken(token){
	try{
		const value = await AsyncStorage.getItem(token);
		console.log('get token', token);
		return value;
	}
	catch{
		console.log('error to get token', token);
	}
};


export async function SetToken(token, data){
	try{
		await AsyncStorage.setItem(token, data);
		console.log('set token', token);
	}
	catch{
		console.log('cant set token', token);
	}
};

export async function GetAllTokens() {
	try{
		const value = await AsyncStorage.getAllKeys();
		return value;
	}
	catch(error){
		console.log(error);
	}
}

export async function multiRemove(tokens) {
	try{
		await AsyncStorage.multiRemove(tokens);
	}
	catch(error){
		console.log(error);
	}
}
