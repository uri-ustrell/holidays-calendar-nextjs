export const getMonthViewOrderedList = (monthView, position) => {
	position = position ? position : 7;
	return Object.keys(monthView)
		.filter((_, i) => i + 1 > 10 - position)
		.filter((_, i) => i < 42);
};
