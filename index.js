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
app.get('/characters', characters.add);
app.get('/characters/:id/edit', characters.edit);

app.post('/characters/:id/edit', characters.edit);
app.post('/characters', characters.create);

console.log("Server started")
app.listen(port)
