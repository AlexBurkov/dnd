let db = require('../../db').db;
let character = require('../models/character');

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

