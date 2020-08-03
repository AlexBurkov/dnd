const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const http = require("http")
const bodyParser = require("body-parser")

const main = require("./app/controllers/main")
const game = require("./app/controllers/game")
const character = require("./app/controllers/character")

const app = express();

const port = 3000;

app.engine('.hbs', exphbs({
	"defaultLayout": "main",
	"extname": ".hbs",
	"layoutsDir": "app/views/layouts",
	"partialsDir": "app/views/partials",
	"helpers": {
		"isEqual": function(a, b, opts){			
			if (a == b) {
				return opts.fn(this);
			}else {
				return opts.inverse(this);
			}
		}
	}	
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'app/views'))
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', main.home);
app.post('/characters/create/main', character.createMain);
app.get('/characters', character.index);
app.get('/characters/create/main', character.addMain);
app.get('/characters/view/:id', character.view);
app.get('/characters/delete/:id', character.delete);
app.get('/characters/dices-for-characteristics', character.dicesForCharacteristics);
app.get('/characters/create/about/:id', character.addAbout);
app.post('/characters/create/about/:id', character.createAbout);
app.get('/characters/edit/:id', character.edit);
app.post('/characters/edit/:id', character.update);

app.get('/game/campaign/:name/:id', game.location);
app.get('/game/campaigns', game.campaigns);

console.log("Server started");
app.listen(port);
