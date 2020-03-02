import { getMonthMapAndList } from "../core/actions/CalendarActions";
import dayjs from "dayjs";
const getType = require("jest-get-type");

describe("calendar ACtion", () => {
	describe("getMonthMapAndList", () => {
		let holidays = [
			{
				date: "2020-01-01",
				localName: "Año Nuevo",
				name: "New Year's Day",
				countryCode: "ES",
				fixed: true,
				global: true,
				counties: null,
				launchYear: 1967,
				type: "Public"
			},
			{
				date: "2020-01-06",
				localName: "Día de Reyes / Epifanía del Señor",
				name: "Epiphany",
				countryCode: "ES",
				fixed: true,
				global: true,
				counties: null,
				launchYear: null,
				type: "Public"
			},
			{
				date: "2020-02-28",
				localName: "Día de Andalucía",
				name: "Regional Holiday",
				countryCode: "ES",
				fixed: true,
				global: false,
				counties: ["ES-AN"],
				launchYear: null,
				type: "Public"
			},
			{
				date: "2020-03-01",
				localName: "Dia de les Illes Balears",
				name: "Regional Holiday",
				countryCode: "ES",
				fixed: true,
				global: false,
				counties: ["ES-IB"],
				launchYear: null,
				type: "Public"
			}
		];
		let date;

		beforeEach(() => {
			date = dayjs(1);
			console.log(date.format());
		});

		it("should return an object with object and array", () => {
			const { monthMap, monthList } = getMonthMapAndList(date, holidays);

			expect(getType(monthMap)).toEqual("object");
			expect(getType(monthList)).toBe("array");
		});

		it("should return a list of dates in YYYTMMDD format", () => {
			const expectedInArray = date.format("YYYYMMDD");
			const { monthList } = getMonthMapAndList(date, holidays);

			expect(monthList).toContain(expectedInArray);
		});

		it("should return an object width YYYYMMDD prop that contains 'holiday','info','date' and 'active' props", () => {
			const expectedInObject = date.format("YYYYMMDD");
			const { monthMap } = getMonthMapAndList(date, holidays);

			expect(
				monthMap[expectedInObject].hasOwnProperty("date")
			).toBeTruthy();
			expect(
				monthMap[expectedInObject].hasOwnProperty("active")
			).toBeTruthy();
			expect(
				monthMap[expectedInObject].hasOwnProperty("holiday")
			).toBeTruthy();
			expect(
				monthMap[expectedInObject].hasOwnProperty("info")
			).toBeTruthy();
		});
	});

	/* rest of ations tests ... */
});
