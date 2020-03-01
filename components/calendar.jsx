import React, { useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import CalendarHeader from "./CalendarHeader";
import * as calendarUtils from "../utils/calendarUtils";

const CalendarWrapper = styled.div`
	margin: auto;
	width: 400px;
	border-radius: 5px;
	overflow: hidden;
	box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.29);
	font-family: sans-serif;
	color: #555;
`;

const CalendarGrid = styled.div`
	display: grid;
	grid-row-gap: 10px;
	grid-template-columns: repeat(7, 1fr);
	padding: 10px;
`;

const CalendarDay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: center;
	border-radius: 100%;
	width: 40px;
	height: 40px;
	margin: auto;
	cursor: pointer;
	${({ active }) =>
		active &&
		`
      font-weight: bold;
      transition: 0.3s;
      &:hover {
        background: tomato;
        color: white
      }
    `}
`;

const getCurrentDate = () => dayjs();

export const Calendar = ({ year, holidays }) => {
	const [month, setMonth] = useState(
		calendarUtils.getMonthNumber(getCurrentDate())
	);

	const monthDays = calendarUtils.getMonthDaysMap(year, month);
	const firstDayPosition = calendarUtils.getFirstDayPosition(
		monthDays[Object.keys(monthDays)[0]]
	);
	const monthMap = calendarUtils.getMonthViewMap(monthDays);
	const monthDaysList = calendarUtils.getMonthViewOrderedList(
		monthMap,
		firstDayPosition
	);

	const handleChangeMonthClick = steps =>
		setMonth(prevMonth => prevMonth + steps);

	return (
		<CalendarWrapper>
			<CalendarHeader
				year={year}
				month={calendarUtils.formatMonth(month)}
				handleChangeMonthClick={handleChangeMonthClick}
			/>
			<CalendarGrid>
				{monthDaysList.map(day => (
					<CalendarDay key={day} active={monthMap[day].active}>
						{calendarUtils.formatDate(day)}
					</CalendarDay>
				))}
			</CalendarGrid>
		</CalendarWrapper>
	);
};
