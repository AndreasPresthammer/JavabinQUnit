var someObject = {
	state: 123
};

test("state can make for tears", function() {
	someObject.state = 321;

	strictEqual(someObject.state, 321);
});

test("hmmmm....", function() {
	strictEqual(someObject.state, 123);
});