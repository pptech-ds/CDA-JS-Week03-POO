class MyTinyCalculator {
    constructor(a, b, result) {
        this.a = a;
        this.b = b;
        this.result = result;
    }

    get defineA() {
        return this.a
    }

    set defineA(value) {
        this.a = value
    }

    add() {
        return this.result = this.a + this.b;
    }

    subtract() {
        return this.result = this.a - this.b;
    }

    multiply() {
        return this.result = this.a * this.b;
    }

    divide() {
        return this.result = this.a / this.b;
    }

    showResult() {
        return this.result
    }
}

const foo = new MyTinyCalculator(30, 12);

console.log('add', foo.add());
console.log('subtract', foo.subtract());
console.log('divide', foo.divide());
console.log('multiply', foo.multiply());
console.log('showResult', foo.showResult());
console.log('defineA', foo.defineA);
console.log('defineA', foo.defineA=24);
console.log('add', foo.add());
console.log('defineA', foo.defineA);



