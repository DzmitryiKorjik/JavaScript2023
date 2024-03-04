class Point {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    equals(other) {
        return this.#x === other.#x && this.#y === other.#y;
    }
}

const user = (function(){
    const privet = function() {
        console.log('I am privet!');
    }

    return {
        sayHello: privet
    }
}());

user.sayHello();