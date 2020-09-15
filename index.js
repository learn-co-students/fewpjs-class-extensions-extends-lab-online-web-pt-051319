class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    let perimeter = 0;
    for (let i = 0; i < this.sides.length; i++) {
      perimeter = perimeter + this.sides[i];
    }
    return perimeter;
  }
}

class Triangle extends Polygon {
  get isValid() {
    let sides = this.sides;
    if (
      sides[2] + sides[1] > sides[0] &&
      sides[0] + sides[1] > sides[2] &&
      sides[0] + sides[2] > sides[1]
    ) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get area() {
    return this.sides[0] * this.sides[0];
  }

  get isValid() {
    let sides = this.sides;
    if (sides[0] == sides[1] && sides[1] == sides[2] && sides[2] == sides[3]) {
      return true;
    } else {
      return false;
    }
  }
}
