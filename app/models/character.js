let db = require('../../db').db;

exports.insert = function(character, callback){
	db.run("INSERT INTO characters(name, race, className, playerName, ideology, traits) VALUES(?, ?, ?, ?, ?, ?)", [character.name, character.race, character.className, character.playerName, character.ideology, character.traits], callback);
};

exports.select_all = function(callback){	
	db.all("select id, name, race, className, playerName, ideology, traits from characters", [], callback);
};

exports.selectById = function(id, callback){	
	db.get("select id, name, race,  className, playerName, ideology, traits from characters where id = ?", [id], callback);
};

exports.deleteById = function(id, callback){
	db.run("delete from characters where id = ?", [id], callback);
};

exports.updateById = function(id, columns, callback){
	var sql = "UPDATE `characters` SET";
	Object.keys(columns).forEach(function(key){
		sql += " " + "`" + key + "`" + "=" + "\"" +columns[key] + "\"";
	});
	sql += " WHERE id = " + id; 
	console.log(sql);
	db.run(sql, [], callback);
};