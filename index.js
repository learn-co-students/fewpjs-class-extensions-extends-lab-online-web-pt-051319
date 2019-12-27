// Your code here
class Polygon {
    constructor(arrayOfSides) {
        this.sides = arrayOfSides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((side, memo) => side + memo, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let [a,b,c] = this.sides.sort()
        return a + b  > c
    }
}

class Square extends Polygon {
    get isValid() {
        return this.sides.every(side => side === this.sides[0]);
    }

    get area() {
        if (this.isValid) {
            return this.sides[0] ** 2
        }
    }
}