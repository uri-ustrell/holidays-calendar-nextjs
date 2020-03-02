import dayjs from "dayjs";

export const compose = (...functions) => args =>
	functions.reduce((arg, fn) => fn(arg), args);

export const getMonthDays = date =>
	parseInt(
		dayjs(date)
			.endOf("month")
			.format("D"),
		10
	);

const getDate = (year, month, day) => dayjs(new Date(year, month, day));

export const getCurrentDate = () => dayjs();

export const dateToMapDay = (day, props) => ({
	[day.format("YYYYMMDD")]: {
		date: day.format(),
		holiday: false,
		info: {},
		...props
	}
});

export const getFirstDayPosition = date =>
	dayjs(date)
		.startOf("month")
		.get("d");

export const getMonthDaysMap = date => {
	const amountMonthDays = getMonthDays(date);
	const monthDaysMap = Array.from({ length: amountMonthDays }).reduce(
		(monthDays, _, day) => {
			return {
				...monthDays,
				...dateToMapDay(date.set("date", day + 1), { active: true })
			};
		},
		{}
	);

	return monthDaysMap;
};

export const getMonthViewMap = monthDays => {
	const monthDaysKeys = Object.keys(monthDays);
	const firstDay = monthDaysKeys[0];
	const lastDay = monthDaysKeys[monthDaysKeys.length - 1];

	const monthView = Array.from({ length: 10 }).reduce((monthMap, _, i) => {
		const currentMonthView =
			Object.keys(monthMap).length === 0 ? { ...monthDays } : monthMap;
		const oneMoreDay = dayjs(lastDay).add(i + 1, "day");
		const oneMoreDayObj = dateToMapDay(oneMoreDay, { active: false });
		const oneLessDay = dayjs(firstDay).subtract(i + 1, "day");
		const oneLessDayObj = dateToMapDay(oneLessDay, { active: false });

		return { ...oneLessDayObj, ...currentMonthView, ...oneMoreDayObj };
	}, {});

	return monthView;
};

export const getMonthViewOrderedList = (monthView, position) => {
	position = position ? position : 7;
	return Object.keys(monthView)
		.filter((_, i) => i + 1 > 10 - position)
		.filter((_, i) => i < 42);
};

export const getMonthViewWithHolidays = holidays => monthView => {
	const monthViewWithHolidays = holidays.reduce(
		(acc, curr) => {
			const day = Object.keys(dateToMapDay(dayjs(curr.date), {}))[0];
			if (acc.hasOwnProperty(day)) {
				(acc[day].holiday = true), (acc[day].info = curr);
			}
			return { ...acc };
		},
		{ ...monthView }
	);

	return monthViewWithHolidays;
};

export const getMonthNumber = date => parseInt(dayjs(date).format("M"), 10);

export const formatDateD = date => dayjs(date).format("D");

export const formatDateMMMM = date => dayjs(date).format("MMMM");

export const formatDateYYYY = date => dayjs(date).format("YYYY");

export const formatFormalDateFromShort = date =>
	dayjs(date, "YYYY-MM-DD").format("DD MMMM, dddd");
