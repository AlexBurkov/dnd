exports.sum = function(arr) {
	var ans = 0;
	for (i = 0; i < arr.length; i++) {
		ans += arr[i];
	}
	return ans;
}
exports.indexOfMinimum = function(arr) {
	var imin = 0;
	for (i = 1; i < arr.length; i++) {
		if(arr[i] < arr[imin]) {
			imin = i;
		}
	}
	return imin;
}
