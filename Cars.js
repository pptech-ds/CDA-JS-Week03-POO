class Cars {
    #price;
    #weight;
    constructor() {
        if (this.constructor === Cars) {
            throw new Error('Abstract class cannot be instantiated!')
        }  
    }

    getPrice() {
        return this.#price;
    }

    getWeight() {
        return this.#weight;
    }
}



class BMW extends Cars {
    static lessExpensive() {
        return 15000;
    }
}


class Suzuki extends Cars {
    static lessExpensive() {
        return 5000;
    }
}

console.log('BMW.lessExpensive()', BMW.lessExpensive());
console.log('Suzuki.lessExpensive()', Suzuki.lessExpensive());
let bmw = new BMW();
bmw.price = 20000;
console.log('bmw.price', bmw.price);

let car = new Cars();
console.log('car', car); // error thrown
