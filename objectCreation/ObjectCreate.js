/**
 * 1. Creates an NEW OBJECT with the PROTOTYPE set to a certain object
 * 
 * 2. "The Object.create() method creates a new object, using an existing object to
 *  provide the newly created object's __proto__ . (see browser console for visual
 *  evidence.)" -- developer.mozilla.org
 * 
 * 3. Syntax: Object.create(proto [, propertiesObject]) : newObjectWithProtoSet as proto
 * 
 * 4. Object.create(proto) is more NATURAL to the prototype model (than using "NEW" to
 * instantiate)
 * 
 * 5. In real life NEVER set the prototype of an object with 
 * Object.setPrototypeOf(obj, proto), it bring lots of performance problems. 
 * 
 * 6. In real life applications ALWAYS use Object.create(proto)
 */

const cat = {
    // constructor
    construct: function (sound) {
        this.sound = sound
        return this
    },
    sound: "Miau!",
    makeSound: function () {
        console.log(this.sound)
    }
}

cat.makeSound() // Default sound

// Set marks prototype to cat
// same as: Object.setPrototypeOf(mark, cat)
const mark = Object.create(cat).construct("MEuwwufff!")
// mark.sound = "MEuwwufff!"
mark.makeSound()

// Same as: Object.setPrototypeOf(waffles, cat)
const waffles = Object.create(cat).construct("mmrrrroooww!")
// waffles.sound = "mmrrrroooww!"
waffles.makeSound()

console.log(`Is mark a cat? ${cat.isPrototypeOf(mark)}`)
// console.log(`Marks proto: ${mark.__proto__}, car proto: ${cat.__proto__}`)

// How Does the Object.create(proto) Works internally 
const objectCreate = function (proto) {
    const obj = {}
    Object.setPrototypeOf(obj, proto)
    return obj
}

const susy = objectCreate(cat);
console.log(`Is susy a cat? ${cat.isPrototypeOf(susy)}`)