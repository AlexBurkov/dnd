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

exports.addMain = function(request, response){
	response.render("character/create/main");
};

exports.createMain = function(request, response){
	var character = {
		name: request.body.name,
		race: request.body.race, 
		className: request.body.className,
		playerName: request.body.playerName,
		ideology: request.body.ideology,
		traits: request.body.traits
	}
	characterTable.insert(character, function(err) {
		response.render("character/create/main", {
			characterId: this.lastID
		})
	});
};

exports.index = function(request, response){
	characterTable.select_all(function(err, rows){
		response.render("character/index", { "characters": rows });
	});
};

exports.view = function(request, response){
	var id = request.params.id;
	characterTable.selectById(id, function(err, row){
		response.render("character/view", {"character": row});
	});
};

exports.delete = function(request, response){
	var id = request.params.id;
	characterTable.deleteById(id, function(err, row){
		response.redirect("/characters");
	});
};

exports.edit = function(request, response){
	var id = request.params.id;
	characterTable.selectById(id, function(err, row){
		response.render("character/create", {"character": row});
	});
};

exports.update = function(request, response){
	var id = request.params.id;
	var character = {
		name: request.body.name,
		race: request.body.race, 
		className: request.body.className,
		playerName: request.body.playerName,
		ideology: request.body.ideology,
		traits: request.body.traits
	}
	characterTable.updateById(id, character, function(err) {
		if(err){
			console.log(err);
		}
		response.redirect("/characters")
	});
};

exports.addAbout = function(request, response){
	var id = request.params.id;
	characterTable.selectById(id, function(err, row){
		response.render("character/create/about", {"character": row});
	});
};

exports.createAbout = function(request, response){
	var id = request.params.id;
	var character = {
		playerName: request.body.playerName,
		ideology: request.body.ideology
	}
	characterTable.updateById(id, character, function(err) {
		response.redirect("/characters/")
	});
};
