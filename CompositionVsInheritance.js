/**
 *  1. The problem with the inheritance is to inheritate lots of things you dont need
 *  
 *  2. "You request the banana, but you get a gorilla holding the banana and the whole jungle with it"
 * 
 *  3. Inheritance is when you design your types around on what they ARE
 * 
 *  4. Composition is when you design your types around on what they DO
 * 
 *  5. You should FAVOR composition over inheritance. Its is more flexible, more powerful
 *  and easy to do
 * 
 *  6. Inheritance is NOT a good pattern and it should not be used, acctually avoided
 * 
 *  7. Inheritance leads to future design problems. Because humans CANNOT predict the future
 * 
 */
/*
//### 1º scenario
Dog
    .poop()
    .bark()
Cat 
    .poop()
    .meow()
MurderRobot 
    .drive()
    .kill()
CleaningRobot
    .drive()
    .clean()

//### 2º scenario
Robot 
    .drive()
    MurderRobot 
        .kill()
    CleaningRobot
        .clean()

Animal 
    .poop()
        Dog 
            .bark()
        Cat 
            .meow()

murderRobotDog // Where to put it???

//### 3º scenario = Composition
dog             = pooper + barker
cat             = pooper + meower
cleaningRobot   = driver + cleaner
murderRobot     = driver + killer
murderRobotDog  = driver + killer + barker

*/

/**
 * 1. Instead of creating their own state internally they accept their state as a 
 * function parameter. This is so that they can access the same state
 * 
 */
const barker = (state) => ({
    bark: () => `Woof, I'm a ${state.name}`
});

const driver = (state) => ({
    drive: () => state.position = state.position + state.speed
});

console.log( barker({name: "Karo"}).bark() ) 

const murderRobotDog = (name) => {
    let state = {
        name,
        speed: 100,
        position: 0
    }
    // "The Object.assign(target ...sources) method is used to copy the values of all 
    // enumerable own properties from one or more source objects to a target object. 
    // It will return the target object."

    // Object.assign take an object and assign the properties of the others objects into it
    return Object.assign( // marges all in one object
        {}, // target (empty object)
        barker(state), // adds bark()  to the target 
        driver(state), // adds drive() to the target
        killer(state)  // adds kill()  to the target
    )
}