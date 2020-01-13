class Polygon {
    constructor(sides){
      this.sides = sides;
      this.count = sides.length;
    }
  
  
    get getCount(){
      return this.sides.length;
    }
  
    get perimeter(){
      const sides = this.sides
      let sum = 0;
      sides.forEach(function(side){
        sum += side;
      })
      return sum;
    }
  }
  
  class Triangle extends Polygon {
  
    get isValid() {
      let a = this.sides[0]
      let b = this.sides[1]
      let c = this.sides[2]
  
      return (this.getCount === 3 && (a+b > c && a+c > b && b+c > a))
    }
  }
  
  class Square extends Polygon {
  
    get isValid() {
      let a = this.sides[0]
      let b = this.sides[1]
      let c = this.sides[2]
      let d = this.sides[3]
  
      return (this.getCount === 4 && (a === b && b === c && c === d && d === a))
      // return (this.getCount === 4 && this.sides.every(val => val === this.sides[0]))
    }
  
    get area() {
      if (this.isValid) {
        // let a = this.sides[0]
        // let b = this.sides[1]
        // return a * b
        return this.sides[0] ** 2
      }
    }
  }