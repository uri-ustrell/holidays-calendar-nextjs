import React from "react";
import { Calendar } from "../components/calendar";
import CountrySelector from "../components/CountrySelector";
import {
	getToday,
	formatYYYY,
	getHolidaysAsync,
	getCountriesAsync
} from "../core/actions/CalendarActions";

const Index = () => {
	const today = getToday();
	const year = formatYYYY(today);

	const [holidays, setHolidays] = React.useState([]);
	const [countries, setCountries] = React.useState([]);
	const [country, setCountry] = React.useState("ES");

	React.useEffect(() => {
		getHolidaysAsync(year, country).then(res => setHolidays(res));
		if (!countries.length)
			getCountriesAsync().then(res => setCountries(res));
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
