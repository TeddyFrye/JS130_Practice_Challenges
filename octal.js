class Octal {
  constructor(octalStr) {
    this.octalStr = octalStr;
  }

  toDecimal() {
    if (typeof this.octalStr !== "string" || !this.octalStr.match(/^[0-7]+$/)) {
      return 0;
    }

    let result = 0;
    let strNum = this.octalStr.split(``).reverse();
    for (let idx = 0; idx < strNum.length; idx++) {
      let char = Number(strNum[idx]);
      result += this.findOctal(char, idx);
      console.log(result);
    }
    return result;
  }

  findOctal(num, idx) {
    return num * 8 ** idx;
  }
}

module.exports = Octal;
