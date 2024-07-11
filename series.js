class Series {
  constructor(strNum) {
    this.strNum = strNum.split(``).map(Number);
  }

  slices(size) {
    if (size > this.strNum.length) {
      throw new Error("Invalid Input");
    }

    let result = [];
    for (let idx = 0; idx <= this.strNum.length - size; idx++) {
      result.push(this.strNum.slice(idx, idx + size));
    }
    return result;
  }
}

module.exports = Series;
