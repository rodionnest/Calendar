/**
 * Function to change the first day to Monday (Monday turns 0, Tuesday turns 1 etc)
 * @param {object} date date-object
 * @returns {number} wefasdflkjas
 */
const getDay = (date) => {
  let day = date.getDay();
  if (day === 0) {
    day = 7;
  }

  return day - 1;
}
// ! Прикол с переходом на wiki по текущей дате и месяцу

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// ! Dont forget JSDoc
const createMonthCalendar = function createMonthCalendarToElement(element, year, month) {
  let elem = document.querySelector(element);
  let mon = month -1;
  let date = new Date(year, mon);

  let table = `
  <div class="calendar-month-card">
    <table>
    <caption>${monthNames[mon]}</caption>
      <tr>
        <th>Mo</th>
        <th>Tu</th>
        <th>We</th>
        <th>Th</th>
        <th>Fr</th>
        <th>Sa</th>
        <th>Su</th>
      </tr>
      <tr>
  `;

  for (let i = 0; i < getDay(date); i += 1) {
    table += '<td></td>';
  }

  while (date.getMonth() === mon) {
    table += `<td>${date.getDate()}</td>`;
    if (getDay(date) % 7 === 6) {
      table += '</tr><tr>';
    }
    date.setDate(date.getDate() + 1);
  }

  for (let i = getDay(date); i < 7; i += 1) {
    table += '<td></td>';
  }

  table += '</tr></table><div>';
  elem.insertAdjacentHTML('beforeend', table);
};

const addCalendarsWithDelay = (container, year) => {
  const elem = document.querySelector(container);
  elem.innerHTML = ''; // Очистка контейнера перед добавлением новых элементов
  for (let month = 1; month <= 12; month++) {
    setTimeout(() => {
      createMonthCalendar(container, year, month);
    }, month * 20); // Задержка 200ms между добавлением карточек
  }
};

let currentYear = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', () => {
  addCalendarsWithDelay('.calendar__inner', currentYear);

  // Обработчики кнопок переключения года
  document.getElementById('prevYear').addEventListener('click', () => {
    currentYear -= 1;
    document.getElementById('currentYear').textContent = currentYear;
    addCalendarsWithDelay('.calendar__inner', currentYear);
  });

  document.getElementById('nextYear').addEventListener('click', () => {
    currentYear += 1;
    document.getElementById('currentYear').textContent = currentYear;
    addCalendarsWithDelay('.calendar__inner', currentYear);
  });
});