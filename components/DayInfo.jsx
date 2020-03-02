import React from "react";
import styled from "styled-components";
import { formatFormalFromShort } from "../core/actions/CalendarActions";

const InfoWrapper = styled.div`
	height: 200px;
	width: 100%;
	padding: 10px;
	background: white;
	position: relative;
	bottom: 200px;
	z-index: 99;
	box-shadow: 0px -200px 100px 100px rgba(0, 0, 0, 0.3);
`;

const Pointer = styled.div`
	float: right;
	width: 10px;
	height: 10px;
	margin-right: 20px;
	border-top: #555 10px solid;
	border-left: transparent 5px solid;
	border-right: transparent 5px solid;
	box-sizing: border-box;
	scursor: pointer;
`;

const Name = styled.h2`
	color: #ff6b6b;
`;

const Date = styled.h3`
	color: #999;
`;
const LocalName = styled.span`
	color: #555;
	font-weight: bold;
`;

const DayInfo = ({ info, handleCloseInfo }) => (
	<InfoWrapper bottom={200}>
		<Pointer onClick={handleCloseInfo} />
		<Name>{info.name}</Name>
		<Date>{formatFormalFromShort(info.date)}</Date>
		<span>Local name: </span>
		<LocalName>{info.localName}</LocalName>
	</InfoWrapper>
);

export default DayInfo;
