const dice = require('../helpers/dice');
const helperArray = require('../helpers/helper_array');
let db = require('../../db').db;
let characterTable = require('../models/character');


exports.dicesForCharacteristics = function(request, response){
	var result = [];
	for (j = 0; j < 6; j++) {
		var diceResult = dice.rollSeveral(6, 4);
		var all = diceResult.slice(0);
		diceResult.splice(helperArray.indexOfMinimum(diceResult), 1);
		result.push({
			"all": all,
			"withoutMin": diceResult,
			"sum": helperArray.sum(diceResult)
		})
	}
	response.json(result);
};

exports.add = function(request, response){
	response.render("character/create")
};

exports.create = function(request, response){
	character={
		name: request.body.name,
		race: request.body.race, 
		classes: request.body.classes,
		playerName: request.body.playerName,
		ideology: request.body.ideology
	}
	characterTable.insert(character, function(err) {
		response.render("character/create", {
			characterId: this.lastID
		})
	});
};

exports.index = function(request, response){
	character.select_all(function(err, rows){
		response.render("character/index", { "characters": rows });
	});
}

exports.view = function(request, response){
	var id = request.params.id;
	character.selectById(id, function(err, row){
		response.render("character/view", {"character": row});
	});
}

exports.delete = function(request, response){
	var id = request.params.id;
	character.deleteById(id, function(err, row){
		response.redirect("/characters");
	});
}
