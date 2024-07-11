class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  day(weekday, schedule) {
    let date = new Date(this.year, this.month - 1, 1);
    let offset = this.dayOfWeekToOffset(weekday.toLowerCase());
    let currentDayOfWeek = date.getDay();

    let daysToAdd = (offset - currentDayOfWeek + 7) % 7;
    date.setDate(date.getDate() + daysToAdd);

    switch (schedule.toLowerCase()) {
      case `first`:
        break;
      case `second`:
        date.setDate(date.getDate() + 7);
        break;
      case `third`:
        date.setDate(date.getDate() + 14);
        break;
      case `fourth`:
        date.setDate(date.getDate() + 21);
        break;
      case `fifth`:
        date.setDate(date.getDate() + 28);
        if (date.getMonth() !== this.month - 1) {
          return null;
        }
        break;
      case `last`:
        while (date.getMonth() === this.month - 1) {
          date.setDate(date.getDate() + 7);
        }
        date.setDate(date.getDate() - 7);
        break;
      case `teenth`:
        while (date.getDate() < 13) {
          date.setDate(date.getDate() + 7);
        }
        break;
      default:
        throw new Error("Invalid input. Try again to schedule D&D");
    }
    return date;
  }

  dayOfWeekToOffset(day) {
    switch (day) {
      case "sunday":
        return 0;
      case "monday":
        return 1;
      case "tuesday":
        return 2;
      case "wednesday":
        return 3;
      case "thursday":
        return 4;
      case "friday":
        return 5;
      case "saturday":
        return 6;
      default:
        throw new Error("Invalid day");
    }
  }
}

module.exports = Meetup;
