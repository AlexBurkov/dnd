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

db.run('CREATE TABLE IF NOT EXISTS `charactersBook`(`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `name` VARCHAR(50), `agility` INTEGER, `power` INTEGER, `charm` INTEGER, `money` INTEGER, `flask` INTEGER, `sword` VARCHAR(50), `luck1` INTEGER, `luck2` INTEGER, `luck3` INTEGER, `luck4` INTEGER, `luck5` INTEGER, `luck6` INTEGER)', [], (err) => {
	if (err) {
		console.log(err.message);
    } else {
		console.log("Created characters Book");
	}
});

exports.db = db;
