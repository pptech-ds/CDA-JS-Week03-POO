class Calculator {
    #a;
    #b;
    #result = null;
    constructor(a, b) {
        this.#a = a;
        this.#b = b;
    }

    get #a() {
        return this.#a;
    }

    get #b() {
        return this.#b;
    }

    set #a(a) {
        this.#a = a;
    }

    set #b(b) {
        this.#b = b;
    }

    add() {
        this.#result = this.#a + this.#b;
        return this.#result;
    }

    // same for multiply, divide, etc..

    showResult() {
        return this.#result;
    }
}

let calc = new Calculator(30, 12);
console.log(calc.add());
console.log(calc.showResult());
console.log(calc.#b(50));
console.log(calc.#b());
console.log(calc.add());
console.log(calc.showResult());