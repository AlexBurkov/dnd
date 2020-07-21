let db = require('../../db').db;
let characterTable = require('../models/character');

exports.add = function(request, response){
	response.render("character/create")
}

exports.create = function(request, response){
	character={
		name: request.body.name,
		race: request.body.race
	}
	characterTable.insert(character, function(err) {
		if (err) {
		  return;
		}
	
		response.render("character/create", {
			character_id: this.lastID
		})
	});
};

exports.edit = function(request, response){
	var id = request.params.id;
	response.render("character/create", {
		character: {
			name: "test",
			race: "test"
		}
	});
}