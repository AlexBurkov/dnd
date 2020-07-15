const dice = require('../helpers/dice');
const helperArray = require('../helpers/helper_array');
let db = require('../../db').db;
let character = require('../models/character');


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

exports.create = function(request, response){
	character.insert_null(function(err) {
		if (err) {
		  return console.log(err.message);
		}
		console.log(`A row has been inserted with rowid ${this.lastID}`);
		response.render("character/create", {
			character_id: this.lastID
		})
	});
	character.select_all(function(err, rows) {
		if (err) {
			console.error(err.message);
		}
		rows.forEach((row) => {
			console.log(row.id);
			console.log(row.name);
			console.log(row.race);
		});
	});
};

exports.create_name = function(request, response){
	console.log(request.body.name);
	console.log(request.body.id);
	character.update_name(request.body.name, request.body.id, function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log(`UPDATE`);
	});
};

exports.create_race = function(request, response){
	console.log(request.body.race);
	console.log(request.body.id);
	character.update_race(request.body.race, request.body.id, function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log(`UPDATE`);
	});
};
