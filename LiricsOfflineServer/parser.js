const osmosis = require('osmosis');
const fs = require('fs');

get_text = url => {
	textData=[]
	console.log(url);
	return(
	osmosis
	.get(url)
	.find('#click_area')
	.set({
		'original':['div .original'],
		'transkate':['div .translate']
	})
	.data(data=>{
		textData.push(data);
	}));
}

module.exports.get_text=get_text