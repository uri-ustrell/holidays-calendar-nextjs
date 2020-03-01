import {
	getMonthViewMap,
	getMonthDaysMap,
	getFirstDayPosition,
	getMonthDays,
	formatMonthToString
} from "../utils/calendarUtils";
import dayjs from "dayjs";

describe("utils", () => {
	/* describe("getMonthViewMap", () => {
		it("should return object with 7 days bejore and after", () => {
			
			const monthDays = getMonthDaysMap(2020, 6);
			//const initialList = Array.from({ length: 30 }, (_, i) => i);
			const monthView = getMonthViewMap(monthDays);
			const newLength = Object.keys(monthDays).length + 7 * 2;

			expect(Object.keys(monthView).length).toEqual(newLength);
		});
	}); */

	describe("getFirstDayPosition", () => {
		it("should return position of the first monday", () => {
			const day = getFirstDayPosition({
				date: "2020-06-15T00:00:00+02:00"
			});

			expect(day).toEqual(1);
		});
	});

	describe("getMonthDays", () => {
		it("should return total of days of date's month", () => {
			const monthDays = getMonthDays(dayjs("2020-06-15T00:00:00+02:00"));
			expect(monthDays).toEqual(30);
		});
	});

	describe("getMonthDays", () => {
		it("should return date's month name", () => {
			const monthName = formatMonthToString(
				dayjs("2020-06-15T00:00:00+02:00")
			);
			expect(monthName).toEqual("June");
		});
	});
});
