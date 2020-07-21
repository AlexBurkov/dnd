let db = require('../../db').db;

exports.insert = function(character, callback){
	db.run(`INSERT INTO characters(name, race) VALUES(?, ?)`, [character.name, character.race], callback);
}

exports.select_all = function(callback){	
	db.all("select id, name, race from characters", [], callback);
}