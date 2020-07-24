const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/dnd.db', (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log('Connected to the dnd database.');
});

db.run('CREATE TABLE IF NOT EXISTS `character`(`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `name` VARCHAR(50), `race` VARCHAR(50), `className` VARCHAR(50), `playerName` VARCHAR(50),  `ideology` VARCHAR(50))', [], (err) => {
	if (err) {
		console.log(err.message);
    } else {
		console.log("Created");
	}
});

exports.db = db;
