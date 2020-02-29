import {
	getMonthViewMap,
	getMonthDaysMap,
	getFirstDayPosition
} from "../utils/calendarUtils";

describe("utils", () => {
	describe("getMonthViewMap", () => {
		it("should return object with 7 days bejore and after", () => {
			/*fix this shitty double test*/
			const monthDays = getMonthDaysMap(2020, 6);
			//const initialList = Array.from({ length: 30 }, (_, i) => i);
			const monthView = getMonthViewMap(monthDays);
			const newLength = Object.keys(monthDays).length + 7 * 2;

			expect(Object.keys(monthView).length).toEqual(newLength);
		});
	});

	describe("getFirstDayPosition", () => {
		it("should return position of the first monday", () => {
			const day = getFirstDayPosition({
				date: "2020-06-15T00:00:00+02:00"
			});

			expect(day).toEqual(1);
		});
	});
});
