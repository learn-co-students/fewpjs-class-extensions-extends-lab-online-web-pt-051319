class Polygon {
    constructor(array) {
        this.sides = array
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((a, b) => a + b, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let [aSide,bSide,cSide] = this.sides.sort()
        return aSide + bSide > cSide
    }
}

class Square extends Polygon {
    get isValid() {
        return this.sides.every(side => side === this.sides[0]);
    }

    get area() {
        if (this.isValid) return this.sides[0] ** 2
    }
}