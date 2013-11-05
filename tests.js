function asyncFunction() {
	var deferred = Q.defer();

	setTimeout(function() {
		deferred.resolve("Hurray!");
	}, 3000);

	return deferred.promise;
}

asyncTest("asynctest", function() {
	asyncFunction()
		.then(function(result) {
			strictEqual(result, "Hurray!");

			start();
		});
});