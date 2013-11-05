var networkService = {
	query: function() {
		alert("Accessing the internet!");

		return Q("Some value from the internetz");
	}
}

function myFunc() {

	return networkService.query()
		.then(function(result) {
			return result.toUpperCase();
		});
}

asyncTest("stubbing", function() {
	networkService.query = function() {
		return Q("Value I control");
	}

	myFunc()
		.then(function(result) {
			strictEqual(result, "VALUE I CONTROL");

			start();
		});
});