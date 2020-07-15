const dice = require('../helpers/dice');
const helper_array = require('../helpers/helper_array');

exports.create = function(request, response){
	response.render("character/create");
};
exports.dices = function(request, response){
	var fullallresults = [];
	var shortallresults = [];
	for (j = 0; j < 6; j++) {
		var result = dice.rollSeveral(6, 4);
		var imin = 0;
		for (i = 1; i < result.length; i++) {
			if(result[i] < result[imin]) {
				imin = i;
			}
		}
		fullallresults.push(result.slice(0));
		result.splice(imin, 1);
		shortallresults.push(result.slice(0));
	}
	response.json({
		"dices1_full": fullallresults[0], "dices1_short": shortallresults[0], "sum1": helper_array.sum(shortallresults[0]),
		"dices2_full": fullallresults[1], "dices2_short": shortallresults[1], "sum2": helper_array.sum(shortallresults[1]),
		"dices3_full": fullallresults[2], "dices3_short": shortallresults[2], "sum3": helper_array.sum(shortallresults[2]),
		"dices4_full": fullallresults[3], "dices4_short": shortallresults[3], "sum4": helper_array.sum(shortallresults[3]),
		"dices5_full": fullallresults[4], "dices5_short": shortallresults[4], "sum5": helper_array.sum(shortallresults[4]),
		"dices6_full": fullallresults[5], "dices6_short": shortallresults[5], "sum6": helper_array.sum(shortallresults[5])
	});
};

