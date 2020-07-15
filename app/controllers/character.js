let db = require('../../db').db;

exports.create = function(request, response){
	db.run(`INSERT INTO characters(name) VALUES(NULL)`, function(err) {
		if (err) {
		  return console.log(err.message);
		}
		console.log(`A row has been inserted with rowid ${this.lastID}`);
		response.render("character/create", {
			character_id: this.lastID
		});
	});
	db.all("select name from characters", [], (err, rows) => {
		if (err) {
			console.error(err.message);
		}
		rows.forEach((row) => {
			console.log(row.name);
			console.log(row.race);
		})
	});

};

exports.create_name = function(request, response){
	console.log(request.body.name);
	console.log(request.body.id);
	db.run(
		'UPDATE characters SET name=? WHERE id=?',
		[request.body.name, request.body.id],
		function(err) {
			if (err) {
				return console.log(err.message);
			}
			console.log(`UPDATE`);
		}
	);
};

