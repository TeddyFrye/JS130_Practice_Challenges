class Triangle {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
    this.valuesArr = [length, width, height];
    this.triangleKind = this.kind();
  }

  validTriangle(obj) {
    for (let value of obj.valuesArr) {
      if (value <= 0) {
        return false;
      }
    }
    obj.valuesArr.sort((a, b) => a - b);
    if (obj.valuesArr[0] + obj.valuesArr[1] <= obj.valuesArr[2]) {
      return false;
    }
    return true;
  }

  kind() {
    if (!this.validTriangle(this)) {
      throw new Error("Invalid Triangle");
    }
    if (this.length === this.width && this.width === this.height) {
      return "equilateral";
    } else if (
      this.length === this.width ||
      this.width === this.height ||
      this.length === this.height
    ) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
}

module.exports = Triangle;
