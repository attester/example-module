/* globals describe, it, expect */
describe("- rectangle", function () {
	it("wider", function () {
		expect(window.computeArea(5, 2)).to.be(10);
	});

	it("taller", function () {
		expect(window.computeArea(3, 2)).to.be(6);
	});
});
