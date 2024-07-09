class RomanNumeral {
  static ROMAN_NUMERALS = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  constructor(num) {
    this.num = num;
  }

  toRoman() {
    let romanNum = "";
    let toConvert = this.num;
    for (let { value, symbol } of RomanNumeral.ROMAN_NUMERALS) {
      while (toConvert >= value) {
        romanNum += symbol;
        toConvert -= value;
      }
    }
    return romanNum;
  }
}

module.exports = RomanNumeral;
