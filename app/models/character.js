let db = require('../../db').db;

exports.insert = function(character, callback){
	db.run(`INSERT INTO characters(name, race, classes, playerName, ideology) VALUES(?, ?, ?, ?, ?)`, [character.name, character.race, character.classes, character.playerName, character.ideology], callback);
}

exports.select_all = function(callback){	
	db.all("select id, name, race, classes, playerName, ideology from characters", [], callback);
}
