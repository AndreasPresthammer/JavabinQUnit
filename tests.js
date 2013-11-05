function louder(str) {
	return str.toUpperCase();
}

test("passing test", function() {
	strictEqual(louder("foo"), "FOO");
});