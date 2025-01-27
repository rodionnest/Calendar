/**
 * Returns the day of the week for a given date, adjusted for a Monday-first week format.
 *
 * @function
 * @param {Date} date - The date object for which the day of the week is determined.
 * @returns {number} The day of the week, where 0 is Monday, 1 is Tuesday, ..., and 6 is Sunday.
 */
const getDay = (date) => {
  let day = date.getDay();
  if (day === 0) {
    day = 7;
  }

  return day - 1;
}

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const setOfDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

/**
 * Creates a calendar for a specified month and year and inserts it into a given element.
 *
 * @function
 * @param {string} container - A CSS selector for the element where the calendar will be inserted.
 * @param {number} year - The year for which the calendar is created.
 * @param {number} month - The month (1–12) for which the calendar is created.
 * @example
 * // Create a calendar for January 2025 inside an element with the id "calendar-container":
 * createMonthCalendar('.calendar-container', 2025, 1);
 */
const createMonthCalendar = function createMonthCalendar(container, year, month) {
  const element = document.querySelector(container);
  const monthIndex = month - 1;
  let date = new Date(year, monthIndex);
  let tableHeaders = '';

  for (let i = 0; i < 7; i += 1) {
    tableHeaders += `<th class="calendar-month-card__table-th">${setOfDays[i]}</th>`;
  }

  let table = `
  <div class="calendar-month-card">
    <table class="calendar-month-card__table">
    <caption class="calendar-month-card__caption">${monthNames[monthIndex]}</caption>
      <tr>
      ${tableHeaders}
      </tr>
      <tr>
  `;

  for (let i = 0; i < getDay(date); i += 1) {
    table += '<td class="calendar-month-card__table-td"></td>';
  }

  while (date.getMonth() === monthIndex) {
    table += `<td class="calendar-month-card__table-td">${date.getDate()}</td>`;
    if (getDay(date) % 7 === 6) {
      table += '</tr><tr>';
    }
    date.setDate(date.getDate() + 1);
  }

  for (let i = getDay(date); i < 7; i += 1) {
    table += '<td class="calendar-month-card__table-td"></td>';
  }

  table += '</tr></table><div>';
  element.insertAdjacentHTML('beforeend', table);
};

/**
 * Adds monthly calendars for a specified year to a container with a customizable delay between each.
 *
 * @function
 * @param {string} container - A CSS selector for the element where calendars will be inserted.
 * @param {number} year - The year for which the calendars will be created.
 * @param {number} delay - The delay in milliseconds between adding each calendar.
 * @example
 * // Add calendars for the year 2025 to an element with a delay of 100ms between each:
 * addCalendarsWithDelay('.calendar__inner', 2025, 100);
 */
const addCalendarsWithDelay = (container, year, delay) => {
  const element = document.querySelector(container);
  element.innerHTML = '';
  for (let month = 1; month <= 12; month++) {
    setTimeout(() => {
      createMonthCalendar(container, year, month);
    }, month * delay);
  }
};

let currentYear = new Date().getFullYear();
let controlsStartYear = document.querySelector('.calendar-controls__current-year')
controlsStartYear.textContent = currentYear;

document.addEventListener('DOMContentLoaded', () => {
  addCalendarsWithDelay('.calendar__inner', currentYear, 20);

  document.querySelector('.calendar-controls__prev-year').addEventListener('click', () => {
    currentYear -= 1;
    document.querySelector('.calendar-controls__current-year').textContent = currentYear;
    addCalendarsWithDelay('.calendar__inner', currentYear, 20);
  });

  document.querySelector('.calendar-controls__next-year').addEventListener('click', () => {
    currentYear += 1;
    document.querySelector('.calendar-controls__current-year').textContent = currentYear;
    addCalendarsWithDelay('.calendar__inner', currentYear, 20);
  });
});
