const osmosis = require('osmosis');
const fs = require('fs');

async get_text = url => {
	textData=[]
	osmosis
	.get(url)
	.find('#click_area')
	.set({
		'original':['div .original'],
		'transkate':['div .translate']
	})
	.data(data=>{
		console.log(data);
		textData.push(data);
	})
	.done(()=>{
		fs.writeFile(`text.json`, JSON.stringify(textData, null, 4), err => {
    		if (err) console.log(err);
    		else console.log(`Data saved to text.json`);
    	})
	})
}

module.exports.get_text=get_text