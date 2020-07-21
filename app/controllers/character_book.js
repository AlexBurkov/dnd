const dice = require('../helpers/dice');
const helperArray = require('../helpers/helper_array');

exports.create = function(request, response){
	var agi = [8, 10, 12, 9, 11, 9, 10, 8, 9, 10, 11];
	var pow = [22, 20, 16, 18, 20, 20, 16, 24, 22, 18, 20];
	var cha = [8, 6, 5, 8, 6, 7, 7, 7, 6, 7, 5];
	var cube = helperArray.sum(dice.rollSeveral(6, 2));
	var result = {
		"cube": cube,
		"agility": agi[cube - 2], // ловкость
		"power": pow[cube - 2], // сила
		"charm": cha[cube - 2] // обаяние
	};
	console.log(result);
	response.render("character_book/create", {"character": result});
};