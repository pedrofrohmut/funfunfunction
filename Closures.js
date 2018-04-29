/**
 * CLOSURES: FunFunFunctions
 * 
 * 1. In JavaScript Functions are not only Functions, they are closures.
 * 
 * 2. Closures means they have access to variables that are find outside the function
 * 
 * 3. "A closure is the combination of a function and the lexical environment within which 
 * that function was declared." -- developer.mozilla.org
 * 
 */

let me = "Bruce Wayne"

function greetMe() {
    // You are not passing any args, but you are referencing "me" of outside the function
    console.log(`Hello ${me}`)
}

me = "Batman"
greetMe()

// Case where Closures are useful
function sendRequest() {
    let requestID = "123"
    $.ajax({
        url: "/myUrl",
        success: function (response) {
            // "requestID" here is only accessible because of Closures. 
            // It was not passed as parameter
            console.log(`Request ${requestID} returned.`)
        }
    })
}

// Mozilla Example 1
function makeFunc() {
    let name = "Mozilla"
    function displayName() {
        console.log(name)
    }
    return displayName
}

let myFunc = makeFunc()
myFunc()

// Mozilla Example 2
function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12