let db = require('../../db').db;

exports.update_name = function(name, id, callback) {
	console.log(id);console.log(name);
	db.run(
		'UPDATE characters SET name=? WHERE id=?',
		[name, id], 
		callback
	);
};

exports.update_race = function(race, id, callback) {
	db.run(
		'UPDATE characters SET race=? WHERE id=?',
		[race, id], 
		callback
	);
};

exports.insert_null = function(callback){
	db.run(`INSERT INTO characters(name) VALUES(NULL)`, [], callback);
}

exports.select_all = function(callback){	
	db.all("select id, name, race from characters", [], callback);
}

exports.selectById = function(id, callback){	
	db.get("select id, name, race from characters where id = ?", [id], callback);
}

exports.deleteById = function(id, callback){
	db.run("delete from characters where id = ?", [id], callback);
}
