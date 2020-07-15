function roll(size){
	return Math.floor(Math.random() * size) + 1;
}

exports.roll = roll;
exports.rollSeveral = function(size, count){
	var arr = [];
	for(i = 0; i < count; i++) {
		arr.push(roll(size));
	}
	return arr;
}