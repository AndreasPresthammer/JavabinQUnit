function asyncFunction() {
	var deferred = Q.defer();

	setTimeout(function() {
		deferred.resolve("Hurray!");
	}, 3000);

	return deferred.promise;
}

test("asynctest", function() {
	strictEqual(asyncFunction(), "Hurray!");
});