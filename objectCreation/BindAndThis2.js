/**
 * 
 * THIS "KEYWORD" IS CONTEXT SENSITIVE
 * 
 * THE "BIND" FUNCTION WORKS BY ADDING A CONTEXT TO ANOTHER FUNCTION
 *  
 */

//# This means nothing without the context
//# You must always have a stablished context for the "this" keyword
const talk = function () {
    console.log(this.sound)
}

let boromir = {
    speak: talk,
    sound: "One does not simply walk into mordor"
}

boromir.speak()

//# Here you bind the Object boromir to the context of the talk function
//# Now this.sound has a context to be referenced
let talkBoundToBoromir = talk.bind(boromir)
talkBoundToBoromir() 

//# This function has no context, so it will return undefined for this keyword
talk()

const gollum = {
    // The speak here is just the body of the function without the context
    // The context of this in the body of the function will refer to the gollum object
    jabber: boromir.speak,
    sound: "My precioussss..."
}

gollum.jabber()

console.log("\n")

//############# 
function describe() {
    console.log("Name: " + this.name)
}

let Mario = {
    name: "mario",
    action: "que te pego atraz do armario",
    // it binds the sayMyName function to this object context
    sayMyName: function () {
        console.log(this.name)
    }
}

describe();
let describeMario = describe.bind(Mario)
describeMario()

Mario.sayMyName()

//##########################################
let User = {
    name: "username",
    email: "email@mail.com",
    getName: function () {
        return this.name
    },
    getEmail: function () {
        return this.email
    },
    setNome: function (novoNome) {
        this.nome = novoNome
    },
    setEmail: function (novoEmail)  {
        this.email = novoEmail
    }
}

console.log(User.getName())
console.log(User.getEmail())

let u = User;
u.name = "Pedro"
u.email = "test@email.com"

console.log(u.getName())
console.log(u.getEmail())