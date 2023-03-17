var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; // function scope (Var tiene alcance Global)
        let fruit2 = 'Kiwi';   // block scope (let tiene alcance local o de bloque)
        const fruit3 = 'Banana'; // block scope (const tiene alcance local o de bloque)
    }
    console.log (fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();