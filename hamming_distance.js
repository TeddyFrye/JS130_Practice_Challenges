class DNA {
  constructor(baseStrand) {
    this.baseStrand = baseStrand;
  }

  hammingDistance(otherStrand) {
    let countDiffs = 0;
    let shorterStrandLength = Math.min(
      this.baseStrand.length,
      otherStrand.length
    );
    for (let idx = 0; idx < shorterStrandLength; idx++) {
      if (this.baseStrand[idx] !== otherStrand[idx]) {
        countDiffs++;
      }
    }
    return countDiffs;
  }
}

module.exports = DNA;
