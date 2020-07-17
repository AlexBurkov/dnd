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
	"layoutsDir": "app/views/layouts"
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'app/views'))
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', main.home);
app.get('/new-game', game.new);
app.get('/create-character', character.create);
app.get('/create-character/dices-for-characteristics', character.dicesForCharacteristics);
app.get('/index', character.index);
app.get('/character-look/:id', character.look);
app.get('/character-edit', character.edit);
app.get('/character-delete/:id', character.delete);

app.post('/create-character/name', character.create_name);
app.post('/create-character/race', character.create_race);

console.log("Server started");
app.listen(port);