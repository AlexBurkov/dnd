const fs = require("fs");

exports.location = function(request, response){
	var nameFile = "app/campaigns/" + request.params.name + ".json";
	var id = request.params.id;
	var campaign = JSON.parse(fs.readFileSync(nameFile, 'utf8'));
	var ans;
	campaign.forEach((location) => {
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

exports.campaigns = function(request, response){
	response.render("game/campaigns");
}
