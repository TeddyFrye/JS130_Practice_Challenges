class Robot {
  static names = new Set();

  constructor() {
    this._name = this.generateName();
  }

  randomName() {
    let nameLetters = `${this.getRandomLetter()}${this.getRandomLetter()}`;
    let nameNums = `${this.getRandomDigit()}${this.getRandomDigit()}${this.getRandomDigit()}`;
    return nameLetters + nameNums;
  }

  generateName() {
    let newName;
    do {
      newName = this.randomName();
    } while (Robot.names.has(newName));
    Robot.names.add(newName);
    return newName;
  }

  getRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  getRandomDigit() {
    return Math.floor(Math.random() * 10);
  }

  get name() {
    return () => this._name;
  }

  reset() {
    Robot.names.delete(this._name);
    this._name = this.generateName();
  }
}

module.exports = Robot;
