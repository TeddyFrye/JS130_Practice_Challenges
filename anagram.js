class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(wordArr) {
    return wordArr.filter((element) => this.validAnagram(element));
  }

  validAnagram(match) {
    match = match.toLowerCase();
    if (match === this.word.toLowerCase()) {
      return false;
    }
    let wordArr = this.word.toLowerCase().split(``).sort();
    let matchArr = match.split(``).sort();
    return wordArr.join(``) === matchArr.join(``);
  }
}

let detector = new Anagram("ant");
let anagrams = detector.match(["tan", "stand", "at"]);
console.log(anagrams);

module.exports = Anagram;
