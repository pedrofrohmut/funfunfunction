/**
 * FACTORY FUNCTIONS
 * 
 * 1. In JavaScript you DONT have to use classes you have freedom
 * 
 * 2. In factory function instead of using classes we use a factory function the return a 
 * object literal with its context binded to it. And in this object literal there is a method 
 * (as an arrow function). The context of this method can not accessed.
 * 
 * 3. With factory functions the reference to its Attributes will always be correct, and you 
 * dont have to bind a context to it when calling the function inside (methods)
 * 
 * 4. Factories are simple functions that create and return objects.
 * 
 * 5. In almost all cases you will be better off using factories instead of classes, because 
 * your code will be simpler an easier to reason about
 * 
 */

class DogClass
{
    constructor (sound) 
    {
        this.sound = sound
    }
    talk() 
    {
        return this.sound
    }
}

const sniffles = new DogClass("Yarl!")
console.log( sniffles.talk() )

// let button
// button.addEventListener(
//     "click", 
//     sniffles.talk.bind(sniffles) OR ( _ => sniffles.talk() )
// )


//*** Dog rewritten as a factory function ***

// Now dog is simply a function
const Dog = () => {
    // the prop sound is actually private to the dog and cannot be changed anymore
    let sound = "woof!" 
    // resturns a simple object literal with talk
    return {
        // because of Closures talk has access to sound
        talk: () => sound
    }
}

const dog = Dog();

dog.sound = "TESTE"
console.log( dog.sound ) // TESTE

console.log( dog.talk() ) // woof!
