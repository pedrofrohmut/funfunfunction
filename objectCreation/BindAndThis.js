// There's no right way to create objects in JS
const dog = {
  sound: "woof",
  talk: function() {
    console.log(this.sound)
  }
}

dog.talk()
const talkFunction = dog.talk // this key word loses the link to dog
/* // THERE IS NOTHING TO BE REFERENCED BY THIS KEYWORD HERE
const talkFunction = function() {
  console.log(this.sound)
}*/
talkFunction()

const boundFunction = talkFunction.bind(dog)
boundFunction()
// JavaScript is not only a OOP language it is also a Functional Prog Lang
// JS is the bastard son of ECMA and Java
// High order functions rocks!!
