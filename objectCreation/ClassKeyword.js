/**
 * THE CLASS KEYWORD
 * 
 * 1. Inheritance is problematic, you should prefer composition in almost any cases
 * 
 * 2. JavaScript does NOT have Classes!!! It's all fake!!!
 * 
 * 3. The class keyword of ES6 is just SyntacticSugar
 * 
 */
class Mammal {
    constructor(sound) {
        this._sound = sound;
    };
    talk() {
        return this._sound;
    };
};

class Dog extends Mammal {
    constructor() {
        super("Wafles!!!");
    };
};

let fluffykins = new Mammal("Woof!");
console.log(fluffykins.talk());

let d1 = new Dog();
let x = d1.talk();
console.log(x);

console.log(typeof Dog);
console.log(typeof Mammal);
// bind is to pass the context of an Object to the function this (thisArg)
let dog1 = Dog.prototype.talk.bind({
    _sound: "ROAR"
})();
console.log(typeof dog1);
console.log(Dog.prototype.isPrototypeOf(d1));