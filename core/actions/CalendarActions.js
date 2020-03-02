import { compose } from "../composer";
import {
	getSingleMonthMap,
	getViewMonthMap,
	getViewMonthWithHolidays
} from "../reducers/calendarMapper";
import { getMonthViewOrderedList } from "../reducers/calendarLister";
import {
	getFirstDayPosition,
	dateToMapDay,
	getMonthDays,
	formatDateYYYY,
	formatDateMMMM,
	formatDateD,
	getCurrentDate
} from "../../utils/calendarUtils";

export const getMonthMapAndList = (date, holidays) => {
	const monthMap = compose(
		getSingleMonthMap(getMonthDays(date), dateToMapDay),
		getViewMonthMap(dateToMapDay),
		getViewMonthWithHolidays(holidays, dateToMapDay)
	)(date);

	const monthList = getMonthViewOrderedList(
		monthMap,
		getFirstDayPosition(date)
	);

	return { monthMap, monthList };
};

export const formatYYYY = date => formatDateYYYY(date);
export const formatMMMM = date => formatDateMMMM(date);
export const formatD = date => formatDateD(date);
export const getToday = () => getCurrentDate();
