let db = require('../../db').db;

exports.insert = function(character, callback){
	db.run(`INSERT INTO character(name, race, className, playerName, ideology) VALUES(?, ?, ?, ?, ?)`, [character.name, character.race, character.className, character.playerName, character.ideology], callback);
}

exports.select_all = function(callback){	
	db.all("select id, name, race, className, playerName, ideology from characters", [], callback);
}

exports.selectById = function(id, callback){	
	db.get("select id, name, race from characters where id = ?", [id], callback);
}

exports.deleteById = function(id, callback){
	db.run("delete from characters where id = ?", [id], callback);
}
