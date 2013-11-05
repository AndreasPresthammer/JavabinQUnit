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

test("stubbing", function() {
	myFunc();
});