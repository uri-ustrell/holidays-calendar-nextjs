import fetch from "isomorphic-unfetch";
/*** Nager.Date Public Holiday API (https://date.nager.at/Api) ***/

// single country yearly holidays
export const getHolidays = async (year, country) => {
	const res = await fetch(`/api/PublicHolidays/${year}/${country}`);
	return res.json();
};
// available countries
export const getCountries = async () => {
	const res = await fetch("/api/AvailableCountries");
	return res.json();
};
