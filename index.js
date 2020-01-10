// Your code here

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
        let s = this.sides
        if (s[0] < s[1] + s[2] && s[1] < s[0] + s[2]) {
            return true
        }
        else {
            return false
        }
    }
}

class Square extends Polygon {

    get isValid() {
        let s = this.sides
        if (s[0] == s[1] && s[1] == s[2] && s[2] == s[3]) {
            return true
        }
        else {
            return false
        }
    }

    get area() {
        let s = this.sides
        return s[0] * s[1]
    }
}