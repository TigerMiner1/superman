/*
 * Discord Bot Builder Bot
 * Version 1.2.0
 * Robert Borghese
 */

//    _____                                             
//   / ____|                                            
//  | (___  _   _ _ __   ___ _ __ _ __ ___   __ _ _ __  
//   \___ \| | | | '_ \ / _ \ '__| '_ ` _ \ / _` | '_ \ 
//   ____) | |_| | |_) |  __/ |  | | | | | | (_| | | | |
//  |_____/ \__,_| .__/ \___|_|  |_| |_| |_|\__,_|_| |_|
//               | |                                    
//               |_|        
//
//  The easy to use Glitch/DBM hosting kit. 🚀
//      github.com/noahmarshall12/superman

const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;
const express = require('express');
const keepalive = require('express-glitch-keepalive');

const app = express();

app.use(keepalive);

app.get('/', (req, res) => {
res.json('This bot should be online! Uptimerobot will keep it alive');
});
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);


if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});

}
