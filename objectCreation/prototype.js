/**
 * 1. Prototype is delegation
 * 2. Prototype is NOT inheritance
 * 3. Every complex variable in JS has Object.__proto__ as prototype
 * 4. __proto__ is the object property that points out the prototype 
 * set to that object that has benn created
 * 5. prototype is a property in a function. And only functions has 
 * this property that has u used the new keyword
 */
let cat = {
    breed: "Munchkin"
}

let myCat = {
    name: "Fluffykins"
}

myCat.breed // undefined

myCat.name // "Fluffykins"

// Set the myCat prototype of myCat to cat
Object.setPrototypeOf(myCat, cat)

myCat.breed // "Munchikin"

myCat.__proto__ // {breed: "Munchkin"}

// this will be added to cat
cat.tailLength = 15

// myCat also is updated when its proto is updated
myCat.__proto__ // {breed: "Munchkin", tailLength: 15}

myCat.tailLength // 15

//###########################################################
// Objects are functions o0 (WTF?)
function Dog() { 

}

Dog.prototype.breed = "Bulldog" // set prototype new attr of breed

let myDog = new Dog() // creates | references it

myDog.breed // "Bulldog"

myDog.prototype // undefined

myDog.__proto__ // {breed: "Bulldog", constructor: f}