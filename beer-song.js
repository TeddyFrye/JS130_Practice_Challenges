class BeerSong {
  static verse(number) {
    return new Verse(number).singleVerse();
  }

  static verses(begin, end) {
    let verses = [];
    for (let currentVerse = begin; currentVerse >= end; currentVerse--) {
      verses.push(this.verse(currentVerse));
    }
    return verses.join("\n");
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}

class Verse {
  constructor(bottles) {
    this.bottles = bottles;
  }

  singleVerse() {
    switch (this.bottles) {
      case 0:
        return this.lastVerse();
      case 1:
        return this.oneBottleVerse();
      case 2:
        return this.twoBottleVerse();
      default:
        return this.defaultVerse();
    }
  }

  defaultVerse() {
    return (
      `${this.bottles} bottles of beer on the wall, ${this.bottles} bottles of beer.\n` +
      `Take one down and pass it around, ${
        this.bottles - 1
      } bottles of beer on the wall.\n`
    );
  }

  twoBottleVerse() {
    return (
      `2 bottles of beer on the wall, 2 bottles of beer.\n` +
      `Take one down and pass it around, 1 bottle of beer on the wall.\n`
    );
  }

  oneBottleVerse() {
    return (
      `1 bottle of beer on the wall, 1 bottle of beer.\n` +
      `Take it down and pass it around, no more bottles of beer on the wall.\n`
    );
  }

  lastVerse() {
    return (
      `No more bottles of beer on the wall, no more bottles of beer.\n` +
      `Go to the store and buy some more, 99 bottles of beer on the wall.\n`
    );
  }
}

module.exports = BeerSong;
