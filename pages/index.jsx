import React from "react";
import dayjs from "dayjs";
import { Calendar } from "../components/calendar";
import CountrySelector from "../components/CountrySelector";
import * as apiHolidays from "../utils/apiHolidays";

const getCurrentDate = () => dayjs();

const Index = () => {
	const year = 2020;
	const today = getCurrentDate();
	const [holidays, setHolidays] = React.useState([]);
	const [countries, setCountries] = React.useState([]);
	const [country, setCountry] = React.useState("ES");

	React.useEffect(() => {
		apiHolidays.getHolidays(year, country).then(res => setHolidays(res));
		if (!countries.length)
			apiHolidays.getCountries().then(res => setCountries(res));
	}, [country]);

	return (
		<>
			<CountrySelector countries={countries} setCountry={setCountry} />
			<Calendar
				className="holidaysCalendar"
				date={today}
				holidays={holidays}
			/>
		</>
	);
};

export default Index;
