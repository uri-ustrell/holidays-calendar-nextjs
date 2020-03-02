import dayjs from "dayjs";
import { getSingleMonthMap } from "../core/reducers/calendarMapper";
import { dateToMapDay } from "../utils/calendarUtils";
const getType = require("jest-get-type");

describe("Map reducer", () => {
	describe("getSingleMonthMap", () => {
		let amount;
		let mapper;
		let map;

		beforeEach(() => {
			amount = 30;
			mapper = getSingleMonthMap(amount, dateToMapDay);
			map = mapper(dayjs());
		});

		it("should return a function", () => {
			expect(getType(mapper)).toEqual("function");
		});

		it("should return a function that returns an object", () => {
			expect(getType(map)).toEqual("object");
		});

		it("should finally return an object with amount of props passed in first param", () => {
			const mapPropsCount = Object.keys(map).length;

			expect(mapPropsCount).toEqual(amount);
		});

		it("should contain 'holiday','info','date' and 'active' props each prop of final object returned", () => {
			const firstdayOfMap = map[Object.keys(map)[0]];

			expect(firstdayOfMap.hasOwnProperty("date")).toBeTruthy();
			expect(firstdayOfMap.hasOwnProperty("active")).toBeTruthy();
			expect(firstdayOfMap.hasOwnProperty("holiday")).toBeTruthy();
			expect(firstdayOfMap.hasOwnProperty("info")).toBeTruthy();
		});
	});

	/* rest of reducer tests ... */
});
