// This means nothing without the context
// You must always have a stablished context for the "this" keyword
function talk() {
    console.log(this.sound)
}

let boromir

talk()  