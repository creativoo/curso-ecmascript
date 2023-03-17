// declarando
class User {};
// instancia de una clase
// const newUser = new User();

class user {
    // metodos
    greeting() {
        return 'Hello';
    }
};

const creativoo = new user();
console.log(creativoo.greeting());
const gndx = new user();
console.log(gndx.greeting());

// Constructor
class user {
    // Constructor
    constructor () {
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hello';
    }
}

const david = new user();

// this
class user {
    constructor (name) {
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting () {
        return `${this.speak()} ${this.name}`;
    }
}

const diego = new user('Diego');
console.log(diego.greeting());

// setters & getters
class user {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    speak() {
        return 'Hello';
    }
    greeting () {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge (n) {
        this.age = n;
    }
}

const bebeloper = new user('David', 15);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20);