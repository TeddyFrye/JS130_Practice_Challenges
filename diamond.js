class Diamond {
  static alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  static makeDiamond(char) {
    let range = this.findRange(char);
    let diamond = range.map((letter) => this.makeRow(letter, char));
    let reversedBottom = diamond.slice(0, -1).reverse(); // Exclude the middle row and reverse the top
    return [...diamond, ...reversedBottom].join("\n") + "\n"; // Ensure a newline at the end of the output
  }

  static makeRow(char, maxChar) {
    const maxWidth = 2 * this.alphabet.indexOf(maxChar) + 1; // Determine the total width of the largest row
    if (char === "A") {
      return this.center("A", maxWidth);
    }
    const middleSpaces = 2 * (this.alphabet.indexOf(char) - 1) + 1; // Space between the letters
    return this.center(`${char}${" ".repeat(middleSpaces)}${char}`, maxWidth);
  }

  static center(content, width) {
    const sideSpaces = (width - content.length) / 2; // Calculate spaces needed on each side
    return " ".repeat(sideSpaces) + content + " ".repeat(sideSpaces);
  }

  static findRange(char) {
    let index = this.alphabet.indexOf(char);
    return this.alphabet.slice(0, index + 1).split("");
  }
}

module.exports = Diamond;
