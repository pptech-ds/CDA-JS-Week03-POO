class Cars {
    constructor(price, weight) {
        this._price = price;
        this._weight = weight;    
    }

    getPrice() {
        return this._price;
    }

    getWeight() {
        return this._weight;
    }
}



class BMW extends Cars {
    constructor(price, weight) {
        this.$_price = price;
        this.$_weight = weight;    
    }

    getPrice() {
        return this.$_price;
    }

    getWeight() {
        return this.$_weight;
    }

    static lessExpensive() {
        return 15000;
    }
}


class Suzuki extends Cars {
    constructor(price, weight) {
        this.$_price = price;
        this.$_weight = weight;    
    }

    getPrice() {
        return this.$_price;
    }

    getWeight() {
        return this.$_weight;
    }

    static lessExpensive() {
        return 5000;
    }
}

console.log('BMW', BMW.lessExpensive())
console.log('Suzuki', Suzuki.lessExpensive())