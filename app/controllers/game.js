const fs = require("fs");
exports.newCampany = function(request, response){
	var campany = JSON.parse(fs.readFileSync("app/campanies/dungeon_of_the_black_castle.json", 'utf8'));
	var id = request.params.id;
	campany.forEach((location) => {
		if(location.id = id){
			response.render("game/location", {"location": location});
		}
	});
};
