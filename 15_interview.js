
//2 nd largest number
const arr =[1,2,3,4,5,6,7]
arr.sort((a,b)=>(b-a))
console.log(arr[1])
console.log(arr.length);


//what is first class

// store  a function in a varaible ex

const abc = function(name){
    return "Hi" + name;
}
console.log(abc("yash"));


// what is Immediate Inovake function?
// it call itself , it cannot wait to execute the function ex

(function(){
    console.log("Immediate called function")
})()


// can you tell me what are pure functions and impure function

// in pure function output and input will same is called pure functions
// // in immpure function output id different and input also .?


function add(a,b){
    return a+b;
}
console.log(add(3,4))
console.log(add(3,4))


// ex for impure

let count = 0;  

function increase() {
    count = count + 1; 
    return count;
}

console.log(increase()); 
console.log(increase()); 
console.log(increase()); 



// what is function curry
// Currying is a technique of transforming a function with multiple arguments into a sequence of functions, each taking one argument at a time.



function curry(a){
 return function(b){
    return a + b;
 }
}
console.log(curry(2)(4))


// differnce let var and const


//data types
// String,Boolean,Number,Object,Array


//do you know about optional chainy


// yes, inoptional chainy we can use in react otherwise page will be crash
// it check value is present in object or not


const data = {
    name:"yash",
    surname:"mane"
}

const {name,surname}=data;

console.log(data?.name)


// differnce == and ===?
// it will check value only in  ==
// it will check value as well as data type


 console.log([]==[]) //array having different memory location it checks refernce
 console.log([]===[]) //arrays are differnt values and objects

// can you tell me how we can handle asyncronus operation
// async await, callback,promises

const str ="yash mane"

const capital = str
  .split(" ")                        
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(" ");                      

console.log(capital); // "Yash Mane"



// show me ex of closure

function myfunction(){
    var name = "yash"
    function second(){
    var surname="mane"
    console.log(surname,name)
    }
  second();
}
  myfunction()


//   what is catche 
//   A cache is a fast, temporary storage that stores frequently used data so that future requests for that data can be served faster.


// 🔹 1. Debouncing

// Definition:

// Debouncing ensures that a function runs only after a certain period of (inactivity).

// Useful for events that fire rapidly, but you want to execute the function once after user stops triggering.

// 🔹 2. Throttling

// Definition:

// Throttling ensures that a function runs at most once in a specified time interval, even if the event keeps firing.

// Useful for scroll or resize events to avoid performance issues.


//string is palindrome


function ispalindrome(str){
const reverse = str.split('').reverse().join("")
return  reverse === str;
}

console.log(ispalindrome("hello"))
console.log(ispalindrome("madam"))


// what is slice and splice?
// slice and splice


// | Feature        | slice()           | splice()            |
// | -------------- | ----------------- | ------------------- |
// | Modifies array |  No              |  Yes               |
// | Returns        | New array         | Removed elements    |
// | Use case       | Copy/extract part | Add/remove elements |


// 🔹 What is a Higher-Order Component?

// A Higher-Order Component (HOC) is a function that takes a component as input and returns a new component.