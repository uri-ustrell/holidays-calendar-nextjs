import dayjs from "dayjs";

export const getMonthDays = date =>
	parseInt(
		dayjs(date)
			.endOf("month")
			.format("D"),
		10
	);

const getDate = (year, month, day) => dayjs(new Date(year, month, day));

const dateToMapDay = (day, props) => ({
	[day.format("YYYYMMDD")]: {
		date: day.format(),
		holiday: false,
		info: {},
		...props
	}
});

export const getFirstDayPosition = day => dayjs(day.date).get("d");

export const getMonthDaysMap = date => {
	const amountMonthDays = getMonthDays(date);
	return Array.from({ length: amountMonthDays }).reduce(
		(monthDays, _, day) => {
			return {
				...monthDays,
				...dateToMapDay(date.set("date", day + 1), { active: true })
			};
		},
		{}
	);
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

export const getMonthViewWithHolidays = (monthView, holidays) =>
	holidays.reduce((acc, curr) => {
		const day = Object.keys(dateToMapDay(dayjs(curr.date), {}))[0];
		if (acc.hasOwnProperty(day)) {
			(acc[day].holiday = true), (acc[day].info = curr);
		}

		return { ...acc };
	}, monthView);

export const getMonthNumber = date => parseInt(dayjs(date).format("M"), 10);

export const formatDate = date => dayjs(date).format("D");

export const formatMonthToString = date => dayjs(date).format("MMMM");

export const formatYear = date => dayjs(date).format("YYYY");
