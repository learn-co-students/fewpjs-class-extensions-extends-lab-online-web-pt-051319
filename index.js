class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length
  }
  get perimeter() {
    
    return this.sides.reduce(function(total, element) {
      return element + total
    }, 0)
  }
}

class Triangle extends Polygon {

  get isValid() {
    let validity = this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] ? true : false

    validity = this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[0] + this.sides[2] > this.sides[1] ? true : false
    
    return validity
  }
}  

class Square extends Polygon {

  get isValid() {
    return this.sides[0] === this.sides[1] && this.sides[2] === this.sides[3] && this.sides[0] === this.sides[2] ? true : false
  }
  get area() {
    return this.sides[0] * this.sides[0]
  }
}