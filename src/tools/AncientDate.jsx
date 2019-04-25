/**
 * This is the earliest possible birthday.
 * Negative indicates BC.
 */
const baseDate = -1000;

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

class AncientDate {
  constructor(yearsSince, date) {
    this.yearsSince = yearsSince;

    // This is a regular Date object, which gets modified
    this.date = date;
  }

  getDateString() {
    let year = this.yearsSince + baseDate;
    let yearString = year < 0 ? `${-year} BC` : `${year} AD`;

    return `${months[this.date.getMonth()]} ${this.date.getDate()}, ${yearString}`;
  }

}

export default AncientDate;