class Clock {
  constructor(hour, minute) {
    this.minutes = (hour * 60 + (minute || 0)) % 1440;
    if (this.minutes < 0) {
      this.minutes += 1440;
    }
  }

  static at(hour, minute) {
    return new Clock(hour, minute);
  }

  add(minutes) {
    return new Clock(0, this.minutes + minutes);
  }

  subtract(minutes) {
    return new Clock(0, this.minutes - minutes);
  }

  toString() {
    let hours = Math.floor(this.minutes / 60);
    let minutes = this.minutes % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }

  isEqual(otherClock) {
    return this.minutes === otherClock.minutes;
  }
}

module.exports = Clock;
