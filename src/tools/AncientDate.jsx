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
  constructor(baseYear, yearsSince, date) {
    this.baseYear = baseYear;
    this.yearsSince = yearsSince;

    // This is a regular Date object, which gets modified
    this.date = date;
  }

  getDateString() {
    let year = this.yearsSince + this.baseYear;
    let yearString = year < 0 ? `${-year} BC` : `${year} AD`;

    return `${months[this.date.getMonth()]} ${this.date.getDate()}, ${yearString}`;
  }

}

export default AncientDate;