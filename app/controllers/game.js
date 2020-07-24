const fs = require("fs");

exports.location = function(request, response){
	var nameFile = "app/campaigns/" + request.params.name + ".json";
	var id = request.params.id;
	var campaign = JSON.parse(fs.readFileSync(nameFile, 'utf8'));
	var currentLocation;
	campaign.forEach((location) => {
		if(location.id == id){
			currentLocation = location;
		}
	});
	response.render("game/location", {
		"location": currentLocation,
		"name": request.params.name
	});
};

exports.campaigns = function(request, response){
	response.render("game/campaigns");
}
