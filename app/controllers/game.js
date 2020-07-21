const fs = require("fs");
exports.newCampany = function(request, response){
	var nameFile = "app/campanies/" + request.params.name + ".json";
	
	var campany = JSON.parse(fs.readFileSync(nameFile, 'utf8'));
	var id = request.params.id;
	var ans;
	campany.forEach((location) => {
		if(location.id == id){
			ans = location;
			//break;
			// тут разобраться
		}
	});
	response.render("game/location", {
		"location": ans,
		"name": request.params.name
	});
};

exports.showCampanies = function(request, response){
	response.render("game/campanies");
}
