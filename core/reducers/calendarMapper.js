import dayjs from "dayjs";

export const getSingleMonthMap = (amountMonthDays, dateToMapDay) => date =>
	Array.from({ length: amountMonthDays }).reduce((monthDays, _, day) => {
		return {
			...monthDays,
			...dateToMapDay(date.set("date", day + 1), { active: true })
		};
	}, {});

export const getViewMonthMap = dateToMapDay => monthDays => {
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

export const getViewMonthWithHolidays = (holidays, dateToMapDay) => monthView =>
	holidays.reduce(
		(acc, curr) => {
			const day = Object.keys(dateToMapDay(dayjs(curr.date), {}))[0];
			if (acc.hasOwnProperty(day)) {
				(acc[day].holiday = true), (acc[day].info = curr);
			}
			return { ...acc };
		},
		{ ...monthView }
	);
