/**
 * 1. What are prototypes: prototypes is what JS uses for inheritance
 * 2. One prototype is like a delegate to a kind of Objects
 * 3. JavaScript classes are prototypes
 * 4. If JS doesnt found in the Object it will delegate to its prototype an try to find the functionality
 */
function talk() {
    console.log(this.sound)
}

let Animal = {
    sound: "",
    talk: talk
}

let dog = Animal
dog.sound = "Woof!"
dog.talk()

let cat = {
    sound: "Meow!"
}

let prarieDog = {
    howl: function () {
        console.log(this.sound.toUpperCase())
    }
}

// is like cat extends Animal
Object.setPrototypeOf(cat, Animal)
cat.talk()

Object.setPrototypeOf(prarieDog, dog)
prarieDog.howl()
/**
 * PROTOTYPE is delegation
 */