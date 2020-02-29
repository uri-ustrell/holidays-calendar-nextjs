import React, { useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import CalendarHeader from "./CalendarHeader";
import * as calendarUtils from "../utils/calendarUtils";

const CalendarGrid = styled.div`
	display: grid;
	grid-row-gap: 10px;
	width: 600px;
	grid-template-columns: repeat(7, 1fr);
`;

const getCurrentDate = () => dayjs();

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

export const Calendar = ({ year, holidays }) => {
	const [month, setMonth] = useState(getMonthNumber(getCurrentDate()));
	const handleChangeMonthClick = steps =>
		setMonth(prevMonth => prevMonth + steps);
	const monthDaysList = getMonthDaysList(year, month);

	return (
		<>
			<CalendarHeader
				year={year}
				month={formatMonth(month)}
				handleChangeMonthClick={handleChangeMonthClick}
			/>
			<CalendarGrid>
				{monthDaysList.map(day => (
					<div key={day}>{formatDate(day)}</div>
				))}
			</CalendarGrid>
		</>
	);
};
