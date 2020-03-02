import {
	getMonthViewMap,
	getMonthDaysMap,
	getMonthViewWithHolidays,
	getFirstDayPosition,
	getMonthDays,
	formatMonthToString,
	compose,
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

	describe("compose", () => {
		it("should concat functions passed passing args from returns", () => {
			const holidays = [{ "date": "2020-01-01", "localName": "Año Nuevo", "name": "New Year's Day", "countryCode": "ES", "fixed": true, "global": true, "counties": null, "launchYear": 1967, "type": "Public" }, { "date": "2020-01-06", "localName": "Día de Reyes / Epifanía del Señor", "name": "Epiphany", "countryCode": "ES", "fixed": true, "global": true, "counties": null, "launchYear": null, "type": "Public" }, { "date": "2020-02-28", "localName": "Día de Andalucía", "name": "Regional Holiday", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-AN"], "launchYear": null, "type": "Public" }, { "date": "2020-03-01", "localName": "Dia de les Illes Balears", "name": "Regional Holiday", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-IB"], "launchYear": null, "type": "Public" }, { "date": "2020-03-19", "localName": "San José", "name": "St. Joseph's Day", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-ML", "ES-CM", "ES-GA", "ES-IB", "ES-M", "ES-MU", "ES-NA", "ES-O", "ES-VC"], "launchYear": null, "type": "Public" }, { "date": "2020-04-10", "localName": "Jueves Santo", "name": "Maundy Thursday", "countryCode": "ES", "fixed": false, "global": false, "counties": ["ES-AN", "ES-AR", "ES-CE", "ES-ML", "ES-CL", "ES-CM", "ES-CN", "ES-EX", "ES-GA", "ES-IB", "ES-LO", "ES-M", "ES-MU", "ES-NA", "ES-O", "ES-PV", "ES-CB"], "launchYear": null, "type": "Public" }, { "date": "2020-04-10", "localName": "Viernes Santo", "name": "Good Friday", "countryCode": "ES", "fixed": false, "global": true, "counties": null, "launchYear": null, "type": "Public" }, { "date": "2020-04-12", "localName": "Pascua de Resurrección", "name": "Easter Sunday", "countryCode": "ES", "fixed": false, "global": true, "counties": null, "launchYear": null, "type": "Public" }, { "date": "2020-04-13", "localName": "Lunes de Pascua", "name": "Easter Monday", "countryCode": "ES", "fixed": false, "global": false, "counties": ["ES-CT", "ES-IB", "ES-NA", "ES-PV", "ES-VC"], "launchYear": 1642, "type": "Public" }, { "date": "2020-04-23", "localName": "San Jorge (Día de Aragón)", "name": "Regional Holiday", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-AR"], "launchYear": null, "type": "Public" }, { "date": "2020-04-23", "localName": "Día de Castilla y León", "name": "Regional Holiday", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-CL"], "launchYear": null, "type": "Public" }, { "date": "2020-05-01", "localName": "Día del Trabajador", "name": "Labour Day", "countryCode": "ES", "fixed": true, "global": true, "counties": null, "launchYear": null, "type": "Public" }, { "date": "2020-05-02", "localName": "Fiesta de la Comunidad de Madrid", "name": "Regional Holiday", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-M"], "launchYear": null, "type": "Public" }, { "date": "2020-05-17", "localName": "Día das Letras Galegas", "name": "Regional Holiday", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-GA"], "launchYear": null, "type": "Public" }, { "date": "2020-05-30", "localName": "Día de Canarias", "name": "Regional Holiday", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-CN"], "launchYear": null, "type": "Public" }, { "date": "2020-05-31", "localName": "Día de la Región Castilla-La Mancha", "name": "Regional Holiday", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-CM"], "launchYear": null, "type": "Public" }, { "date": "2020-06-09", "localName": "Día de la Región de Murcia", "name": "Regional Holiday", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-MU"], "launchYear": null, "type": "Public" }, { "date": "2020-06-09", "localName": "Día de La Rioja", "name": "Regional Holiday", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-LO"], "launchYear": null, "type": "Public" }, { "date": "2020-06-24", "localName": "Sant Joan", "name": "St. John's Day", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-CT"], "launchYear": null, "type": "Public" }, { "date": "2020-07-25", "localName": "Santiago Apóstol", "name": "Saint James", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-GA"], "launchYear": null, "type": "Public" }, { "date": "2020-08-15", "localName": "Asunción", "name": "Assumption", "countryCode": "ES", "fixed": true, "global": true, "counties": null, "launchYear": null, "type": "Public" }, { "date": "2020-09-02", "localName": "Día de Ceuta", "name": "Municipal Holiday", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-CE"], "launchYear": null, "type": "Public" }, { "date": "2020-09-08", "localName": "Día de Asturias", "name": "Regional Holiday", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-O"], "launchYear": null, "type": "Public" }, { "date": "2020-09-08", "localName": "Día de Extremadura", "name": "Regional Holiday", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-EX"], "launchYear": null, "type": "Public" }, { "date": "2020-09-11", "localName": "Diada Nacional de Catalunya", "name": "National Day of Catalonia", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-CT"], "launchYear": null, "type": "Public" }, { "date": "2020-09-15", "localName": "Día de Cantabria", "name": "Regional Holiday", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-CB"], "launchYear": null, "type": "Public" }, { "date": "2020-10-09", "localName": "Dia de la Comunitat Valenciana", "name": "Regional Holiday", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-VC"], "launchYear": null, "type": "Public" }, { "date": "2020-10-12", "localName": "Fiesta Nacional de España", "name": "Fiesta Nacional de España", "countryCode": "ES", "fixed": true, "global": true, "counties": null, "launchYear": null, "type": "Public" }, { "date": "2020-10-25", "localName": "Euskadi Eguna", "name": "Regional Holiday", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-PV"], "launchYear": null, "type": "Public" }, { "date": "2020-11-01", "localName": "Día de todos los Santos", "name": "All Saints Day", "countryCode": "ES", "fixed": true, "global": true, "counties": null, "launchYear": null, "type": "Public" }, { "date": "2020-12-06", "localName": "Día de la Constitución", "name": "Constitution Day", "countryCode": "ES", "fixed": true, "global": true, "counties": null, "launchYear": null, "type": "Public" }, { "date": "2020-12-08", "localName": "Inmaculada Concepción", "name": "Immaculate Conception", "countryCode": "ES", "fixed": true, "global": true, "counties": null, "launchYear": null, "type": "Public" }, { "date": "2020-12-25", "localName": "Navidad", "name": "Christmas Day", "countryCode": "ES", "fixed": true, "global": true, "counties": null, "launchYear": null, "type": "Public" }, { "date": "2020-12-26", "localName": "Sant Esteve", "name": "St. Stephen's Day", "countryCode": "ES", "fixed": true, "global": false, "counties": ["ES-CT", "ES-IB"], "launchYear": null, "type": "Public" }];
			const finalCalendar = compose(getMonthDaysMap, getMonthViewMap, getMonthViewWithHolidays(holidays))(dayjs());
			console.log(finalCalendar);
		})
	})
});
