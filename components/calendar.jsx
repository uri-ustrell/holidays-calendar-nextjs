import React, { useState } from "react";
import styled from "styled-components";
import CalendarHeader from "./CalendarHeader";
import DayInfo from "./DayInfo";
import * as calendarUtils from "../utils/calendarUtils";

const CalendarWrapper = styled.div`
	margin: auto;
	width: 400px;
	border-radius: 5px;
	overflow: hidden;
	box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.29);
	font-family: sans-serif;
	max-height: 380px;
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
	color: #999;

	${({ holiday, active }) => {
		let style = "";
		if (active) {
			style += `
      font-weight: bold;
      transition: 0.3s;
      color: #555;
      
      &:hover {
        background: lightgrey;
        color: white;
      }
    `;
		}

		if (holiday) {
			style += `color: #ff6b6b;`;
		}

		if (holiday && active) {
			style += `&:hover {
        background: #ff6b6b;
    }`;
		}
		return style;
	}}
`;

export const Calendar = ({ date, holidays = [] }) => {
	const [month, setMonth] = useState(date);
	const [info, setInfo] = useState({});

	const monthDays = calendarUtils.getMonthDaysMap(month);
	const firstDayPosition = calendarUtils.getFirstDayPosition(
		monthDays[Object.keys(monthDays)[0]]
	);
	const monthMapWithoutHolidays = calendarUtils.getMonthViewMap(monthDays);
	const monthMap = calendarUtils.getMonthViewWithHolidays(
		monthMapWithoutHolidays,
		holidays
	);
	const monthDaysList = calendarUtils.getMonthViewOrderedList(
		monthMap,
		firstDayPosition
	);

	const handleChangeMonthClick = steps =>
		setMonth(prevMonth => prevMonth.add(steps, "month"));

	const displayInfo = day => {
		if (day.holiday) setInfo(day);
		else setInfo({});
	};

	return (
		<CalendarWrapper>
			<CalendarHeader
				year={calendarUtils.formatYear(month)}
				month={calendarUtils.formatMonthToString(month)}
				handleChangeMonthClick={handleChangeMonthClick}
			/>
			<CalendarGrid>
				{monthDaysList.map(day => (
					<CalendarDay
						key={day}
						holiday={monthMap[day].holiday}
						active={monthMap[day].active}
						onClick={() => displayInfo(monthMap[day])}
					>
						{calendarUtils.formatDay(day)}
					</CalendarDay>
				))}
			</CalendarGrid>
			{info.holiday && (
				<DayInfo
					info={info.info}
					handleCloseInfo={() => displayInfo({})}
				/>
			)}
		</CalendarWrapper>
	);
};
