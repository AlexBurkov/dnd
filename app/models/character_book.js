let db = require('../../db').db;

exports.insert = function(character, callback){
	db.run(`INSERT INTO charactersBook(name, agility, power, charm, money, flask, sword, luck1, luck2, luck3, luck4, luck5, luck6) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [character.name, character.agility, character.power, character.charm, character.money, character.flask, character.sword, character.backpack, character.information, character.luck], callback);
}

exports.selectById = function(id, callback){	
	db.get("select id, name, agility, power, charm, money, flask, sword, luck1, luck2, luck3, luck4, luck5, luck6 from charactersBook where id = ?", [id], callback);
}
