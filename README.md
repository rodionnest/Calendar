# Calendar

![Header](/readmeimg/calendar-header.png)
`Native CSS layout with JS logic.`

![HTML](https://img.shields.io/badge/HTML-bf5836) ![CSS](https://img.shields.io/badge/CSS-511f78) ![JS](https://img.shields.io/badge/JS-ffdd45) ![BEM](https://img.shields.io/badge/BEM-0373fc) ![Grid](https://img.shields.io/badge/Grid-f0933a) ![Responsive](https://img.shields.io/badge/Responsive-2fc45c)

## Features
- Control the year of the calendar using buttons
- JS animation for the appearance of calendar cards
- Modern design of cards
- JSDoc documentation for functions
	``` javascript
	/**
	 * Returns the day of the week for a given date, adjusted for a Monday-first week format.
	 *
	 * @function
	 * @param {Date} date - The date object for which the day of the week is determined.
	 * @returns {number} The day of the week, where 0 is Monday, 1 is Tuesday, ..., and 6 is Sunday.
	 */
	const createMonthCalendar = function createMonthCalendar(container, year, month) {
	```
- Grid layout
- CSS variables are used for quick design adjustments if needed
- BEM Naming
- Variables, media queries, and CSS reset are implemented in separate files to simplify code management
- Hover effects are implemented using a media query for device type to disable it on touch devices

	```css
	@media (hover: hover) {
	.calendar-month-card__table-td:hover {
		color: #fff;
		background-color: var(--accent-color-1);
		...
	```

- Normalize.css is used for cross-browser compatibility ([v8.0.1](https://necolas.github.io/normalize.css/))
- A typical CSS reset is used