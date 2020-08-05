const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const http = require("http")
const bodyParser = require("body-parser")

const main = require("./app/controllers/main")
const game = require("./app/controllers/game")
const character = require("./app/controllers/character")
const characterBook = require("./app/controllers/character_book");

const app = express();

const port = 3000;

app.engine('.hbs', exphbs({
	"defaultLayout": "main",
	"extname": ".hbs",
	"layoutsDir": "app/views/layouts"
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'app/views'))
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', main.home);

app.get('/characters', character.index);
app.get('/characters/create', character.add);
app.post('/characters/create', character.create);
app.get('/characters/view/:id', character.view);
app.get('/characters/delete/:id', character.delete);
app.get('/characters/dices-for-characteristics', character.dicesForCharacteristics);

app.get('/characters-book/dices-for-characteristics', characterBook.dicesForCharacteristics);
app.get('/characters-book/dices-for-luck', characterBook.dicesForLuck);
app.get('/create-character-book', characterBook.add);
app.post('/create-character-book', characterBook.create);
app.get('/characters-book/view/:id', characterBook.view);
app.get('/game/campaign/:name/:id', game.location);
app.get('/game/campaigns', game.campaigns);

console.log("Server started");
app.listen(port);
