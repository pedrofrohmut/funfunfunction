/**
 * The old way of doing shit with objects
 */
// This is the constructor
function Person (saying) {
    this.saying = saying
}

Person.prototype.talk = function () {
    console.log("I say: ", this.saying)
}

// Understand how the new works internally
function _new (constructor, args) {
    // Create an object
    var obj = {}
    // Set the prototype
    Object.setPrototypeOf(obj, constructor.prototype)
    /** 
     * "APPLY" IS LIKE "BIND", BUT EXECUTES THE FUNCTION 
     * IMMEDIATELY AND RETURNS
     * apply(thisArgs, argsArg)
     */
    /**
     * arguments is not an array
     */
    var argsArr = Array.prototype.slice.apply(arguments) //old way
    // Execute the constructor
    return constructor.apply(obj, argsArr.slice(1)) || obj
}

/**
 * 1. The "new" keyword creates an Objtec 
 * 2. Checks the "Person" prototype and set the prototype to be the object created
 * 3. Calls the constructor and Assign the this context of Person to the object created
 * 4. Returns the object created
 */
// var crockforg = new Person("SEMICOLANS!!!1one1")
var crockforg = _new(Person, "SEMICOLANS!!!")
crockforg.talk()

var test = new Person("TEstanDO....!")
test.talk()