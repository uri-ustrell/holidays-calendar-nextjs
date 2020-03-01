import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.div`
	margin-bottom: 1rem;
	margin: auto;
	font-weight: bold;
	font-size: 1.5em;
`;

const Pointer = styled.div`
	width: 10px;
	height: 10px;
	margin: auto;
	border-${props => (props.left && "right") || "left"}: white 10px solid;
	border-bottom: transparent 5px solid;
	border-top: transparent 5px solid;
	box-sizing: border-box;
	cursor: pointer;
`;

const HeaderWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	height: 70px;
	background-color: #ff6b6b;
	color: white;
`;

const CalendarHeader = ({ year, month, handleChangeMonthClick }) => {
	return (
		<HeaderWrapper>
			<Pointer left onClick={() => handleChangeMonthClick(-1)} />
			<Title>{`${month} ${year}`}</Title>
			<Pointer right onClick={() => handleChangeMonthClick(1)} />
		</HeaderWrapper>
	);
};

export default CalendarHeader;
