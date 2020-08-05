const dice = require('../helpers/dice');
const helperArray = require('../helpers/helper_array');
let db = require('../../db').db;
let characterTable = require('../models/character_book');

exports.add = function(request, response){
	response.render("character_book/create");
};

exports.create = function(request, response){
	var character = {
		name: request.body.name,
		agility: request.body.agility, 
		power: request.body.power,
		charm: request.body.charm,
		money: 15,
		flask: 2,
		sword: 0,
		luck1: 0,
		luck2: 0,
		luck3: 0,
		luck4: 0,
		luck5: 0,
		luck6: 0
	}
	console.log(character);
	characterTable.insert(character, function(err) {
		if(err){
			console.log(err);
		}
		response.redirect("/characters-book/view/" + this.lastID);
	});
};

exports.dicesForCharacteristics = function(request, response){
	var agi = [8, 10, 12, 9, 11, 9, 10, 8, 9, 10, 11];
	var pow = [22, 20, 16, 18, 20, 20, 16, 24, 22, 18, 20];
	var cha = [8, 6, 5, 8, 6, 7, 7, 7, 6, 7, 5];
	var cube = helperArray.sum(dice.rollSeveral(6, 2));
	response.json( {
		"cube": cube,
		"agility": agi[cube - 2], // ловкость
		"power": pow[cube - 2], // сила
		"charm": cha[cube - 2] // обаяние
	});
};

exports.dicesForLuck = function(request, response){
	response.json({
		"first": dice.rollSeveral(6, 1),
		"second": dice.rollSeveral(6, 1)
	});
}

exports.view = function(request, response){
	var id = request.params.id;
	characterTable.selectById(id, function(err, row){
		//console.log(row);
		response.render("character_book/view", {"character": row});
	});
}
