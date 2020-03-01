import React, { useState } from "react";
import styled from "styled-components";

const Selector = styled.input.attrs(() => ({ list: "countries" }))`
	margin: 10px auto;
	display: block;
`;
const Datalist = styled.datalist.attrs(() => ({ id: "countries" }))``;

const CountrySelector = ({ countries = [], setCountry }) => {
	const [selectorValue, setSelectorValue] = useState("Spain");

	const selectCountry = e => {
		setSelectorValue(e.target.value);

		const newSelectedCountry = countries.find(
			c => c.value === e.target.value
		);
		if (newSelectedCountry) {
			setCountry(newSelectedCountry.key);
		}
	};
	return (
		<>
			<Selector value={selectorValue} onChange={selectCountry} />
			<Datalist>
				{countries.map(c => (
					<option key={c.key}>{c.value}</option>
				))}
			</Datalist>
		</>
	);
};

export default CountrySelector;
