class PerfectNumber {
  static classify(num) {
    let sum = PerfectNumber.findAliquot(num);
    if (sum === num) return "perfect";
    if (sum < num) return "deficient";
    if (sum > num) return "abundant";
    return "Invalid";
  }

  static findAliquot(num) {
    let divisors = PerfectNumber.findDivisors(num);
    return divisors.reduce((a, b) => a + b);
  }

  static findDivisors(num) {
    let divisors = [];
    let idx = 0;
    while (idx < num) {
      if (num % idx === 0) divisors.push(idx);
      idx++;
    }
    return divisors;
  }
}

module.exports = PerfectNumber;
