const http = require('http');
const osmosis = require('osmosis');
const fs = require('fs')
const {get_text} = require('./parser.js');
const express = require("express");
// создаем объект приложения
const app = express();
// определяем обработчик для маршрута "/"
app.get("/search/:searchtext", function(request, response){
    text=request.params.searchtext;
    console.log(text);
    songsData = []

    osmosis
    .get(`https://www.amalgama-lab.com/songs/${text[0]}/${text}/`)
    .find('#songs_nav')
    .set({
    	'songs':['ul ul li a'],
    	'songs_href':['ul ul li a@href']
    })
    .data(data => {
    	songsData.push(data);
    })
    .done(() =>{
    	fs.writeFile(`data/data${text}.json`, JSON.stringify(songsData, null, 4), err => {
    		if (err) console.log(err);
    		else console.log(`Data saved to data${text}.json`);
    	});
    	console.log('send data');
    	if (songsData.length==0){
    		songsData={
                result:'404'
            };
    	}
    	response.send(JSON.stringify(songsData));
    })
});

app.get("/lirics/:artist/:song", (request, response) => {
	artist=request.params.artist;
	song=request.params.song;
	console.log(artist, song);
	url=`https://www.amalgama-lab.com/songs/${artist[0]}/${artist}/${song}`;
	textData=[]
	console.log(url);
	osmosis
	.get(url)
	.find('#click_area')
	.set({
		'original':['div .original'],
		'transkate':['div .translate']
	})
	.data(data=>{
        console.log('send song:', song);
        response.send(JSON.stringify(data));
	});
})

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);