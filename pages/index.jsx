import React from "react";
import fetch from "isomorphic-unfetch";
import dayjs from "dayjs";
import { Calendar } from "../components/calendar";

/*** Nager.Date Public Holiday API (https://date.nager.at/Api) ***/

// single country yearly holidays
const getHolidays = async (year, country) => {
	const res = await fetch(`/api/PublicHolidays/${year}/${country}`);
	return res.json();
};
// available countries
const getCountries = async () => {
	const res = await fetch("/api/AvailableCountries");
	return res.json();
};

const getCurrentDate = () => dayjs();

const Index = () => {
	const year = 2020;
	const country = "ES";
	const today = getCurrentDate();
	const [holidays, setHolidays] = React.useState([]);

	React.useEffect(() => {
		getHolidays(year, country).then(res => setHolidays(res));
	}, []);

	return (
		<Calendar
			className="holidaysCalendar"
			date={today}
			holidays={holidays}
		/>
	);
};

export default Index;
