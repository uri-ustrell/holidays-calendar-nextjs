import dayjs from "dayjs";

const calendarMap = Array.from({ length: 6 }).map(week => [
	{ Mo: "" },
	{ Tu: "" },
	{ We: "" },
	{ Th: "" },
	{ Fr: "" },
	{ Sa: "" },
	{ Su: "" }
]);
export const getFirstDayPosition = day => dayjs(day.date).get("d");

export const getMonthView = monthDays => {
	const monthDaysKeys = Object.keys(monthDays);
	const firstDay = monthDaysKeys[0];
	const lastDay = monthDaysKeys[monthDaysKeys.length - 1];

	const monthView = Array.from({ length: 7 }).reduce((monthMap, _, i) => {
		const currentMonthView =
			Object.keys(monthMap).length === 0 ? { ...monthDays } : monthMap;
		const oneMoreDay = dayjs(lastDay).add(i + 1, "day");
		const oneMoreDayObj = {
			[oneMoreDay.format("YYYYMMDD")]: { date: oneMoreDay.format() }
		};
		const oneLessDay = dayjs(firstDay).subtract(i + 1, "day");
		const oneLessDayObj = {
			[oneLessDay.format("YYYYMMDD")]: { date: oneLessDay.format() }
		};

		return { ...oneLessDayObj, ...currentMonthView, ...oneMoreDayObj };
	}, {});

	return monthView;
};

export const getMonthViewOrderedList = (monthView, firstDay) =>
	Object.keys(monthView).filter(
		(_, i) => i + 1 > 6 - firstDay && i + 6 - firstDay < 41
	);

const getMonthDays = (year, month) => new Date(year, month, 0).getDate();

const getDate = (year, month, day) => dayjs(new Date(year, month, day));

const formatDate = date => dayjs(date).format("D");

const formatMonth = month =>
	dayjs()
		.month(month - 1)
		.format("MMMM");

const getMonthNumber = date => parseInt(dayjs(date).format("M"), 10);

export const getMonthDaysMap = (year, month) => {
	const monthDays = getMonthDays(year, month);
	return Array.from({ length: monthDays + 1 }).reduce((monthDays, _, day) => {
		const date = getDate(year, month - 1, day);
		return {
			...monthDays,
			[date.format("YYYYMMDD")]: { date: date.format() }
		};
	});
};
