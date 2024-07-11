class SumOfMultiples {
  constructor(...numArr) {
    this.numArr = numArr.length > 0 ? numArr : [3, 5];
  }

  to(inputNum) {
    return SumOfMultiples.sumUpMultiples(inputNum, this.numArr);
  }

  static to(inputNum) {
    return SumOfMultiples.sumUpMultiples(inputNum, [3, 5]);
  }

  static sumUpMultiples(inputNum, numArr) {
    let sum = 0;
    for (let num = 1; num < inputNum; num++) {
      let added = false;
      for (let element of numArr) {
        if (num % element === 0) {
          if (!added) {
            sum += num;
            added = true;
          }
        }
      }
    }
    return sum;
  }
}

module.exports = SumOfMultiples;
