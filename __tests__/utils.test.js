import { getMonthView, getMonthView2 } from "../utils/calendarUtils";

describe("utils", () => {
	describe("getMonthView", () => {
		it("should return array of 42 items", () => {
			const monthView = getMonthView([1, 2, 3, 4]);
			expect(monthView.length).toEqual(6);
		});
	});

	describe("getMonthView2", () => {
		it("should return a month view map", () => {
			const monthView = getMonthView2(
				new Date("2020-01-04T23:00:00.000Z")
			);
			expect(monthView).toEqual(true);
		});
	});
});
