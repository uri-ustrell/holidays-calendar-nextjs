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

export const getMonthView = list => {
	//console.log(getMonthDaysList(2020, 1).map(day => dayjs(day).format("dd")));
	return calendarMap.map(week =>
		week.map(weekDay => weekDay.hasOwnProperty())
	);
};

export const getMonthView2 = date => {
	console.time("monthView");
	const monthView = Array.from({ length: 42 }).reduce((monthMap, _, i) => {
		const oneMoreDay = {
			[dayjs(date)
				.add(i, "day")
				.format()]: {}
		};

		const oneLessDay = {
			[dayjs(date)
				.subtract(i, "day")
				.format()]: {}
		};

		return { ...oneLessDay, ...monthMap, ...oneMoreDay };
	}, {});
	console.timeEnd("monthView");
	console.log(monthView);
	return true;
};

const getMonthDays = (year, month) => new Date(year, month, 0).getDate();

const getDate = (year, month, day) => new Date(year, month, day);

const formatDate = date => dayjs(date).format("D");

const formatMonth = month =>
	dayjs()
		.month(month - 1)
		.format("MMMM");

const getMonthNumber = date => parseInt(dayjs(date).format("M"), 10);

const getMonthDaysList = (year, month) => {
	const monthDays = getMonthDays(year, month);
	return Array.from({ length: monthDays }, (_, day) =>
		getDate(year, month - 1, day + 1)
	);
};
