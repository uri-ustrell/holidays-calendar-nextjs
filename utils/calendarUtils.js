import dayjs from "dayjs";

export const getMonthDays = date =>
	parseInt(
		dayjs(date)
			.endOf("month")
			.format("D"),
		10
	);

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

export const getMonthNumber = date => parseInt(dayjs(date).format("M"), 10);

export const formatDateD = date => dayjs(date).format("D");

export const formatDateMMMM = date => dayjs(date).format("MMMM");

export const formatDateYYYY = date => dayjs(date).format("YYYY");

export const formatFormalDateFromShort = date =>
	dayjs(date, "YYYY-MM-DD").format("DD MMMM, dddd");
