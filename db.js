const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/dnd.db', (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log('Connected to the dnd database.');
});

db.run('CREATE TABLE IF NOT EXISTS `characters`(`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `name` VARCHAR(50), `race` VARCHAR(50), `classes` VARCHAR(50), `playerName` VARCHAR(50),  `ideology` VARCHAR(50))', [], (err) => {
	if (err) {
		console.log(err.message);
    } else {
		console.log("Created");
	}
});

db.run('CREATE TABLE IF NOT EXISTS `charactersBook`(`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `name` VARCHAR(50), `agility` INTEGER, `power` INTEGER, `charm` INTEGER, `money` INTEGER, `flask` VARCHAR(50), `sword` VARCHAR(50), `luck1` VARCHAR(50), `luck2` VARCHAR(50), `luck3` VARCHAR(50), `luck4` VARCHAR(50), `luck5` VARCHAR(50), `luck6` VARCHAR(50))', [], (err) => {
	if (err) {
		console.log(err.message);
    } else {
		console.log("Created_characters_Book");
	}
});

exports.db = db;
