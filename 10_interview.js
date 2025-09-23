// which have higher procidencial promises or settimeout?
// 1-promises beacause  set timeout take time to execute 

// 2 - by using promise we can handle settimeout


//promises  and async and await 
// promises is older method and async await is new method beacause java is single threaded it run code line by line

// do you know impure function?

// It may not return the same output for the same input.

let x = 10;

function multiplyByX(num) {
  return num * x; 
}


console.log(multiplyByX(5));  



// can you tell JSON.stringify and JSON.parse?

// means JSON.stringify it convert value into string and JSON.parse it can convert string into value 

//can you tell me NULL and Undefined

// def a varaible like this 

let y = null;
console.log(y);

let z;
console.log(z);


// both are falsy value

// can you tell me differnce of deep copy ans shallow copy?

// in shallow  copy we can change copy value in object but in deep copy we cannot change value as it is in output will be shown



//ex shallow  copy
let obj1 = {
  name: "Yash",
  address: { city: "Pune", pincode: 411058 }
};

// Shallow copy
let obj2 = { ...obj1 };

obj2.address.city = "Mumbai";

console.log(obj1.address.city); 

//ex deep copy

let obj3 = {
  name: "Yash",
  address: { city: "Pune", pincode: 411058 }
};

// Deep copy (simple way using JSON)
let obj4 = JSON.parse(JSON.stringify(obj3));

obj4.address.city = "Mumbai";

console.log(obj3.address.city); 


// can you tell me concept of function curry

//  A function that takes multiple arguments is pass in  a sequence of functions.

function curry(a){
return function (b){
    return function (c){
        return a+b+c;
    }
}
}
console.log(curry(2)(3)(4));


// what is Array destructuring --- we can access array values in differnt variables.

const arr1 = [2,4,5,8,9];

const [f,g,c,d,e]= arr1;

console.log(f,g,c,d)


// what is diffrence event bubbling and event capturing ?

// | Feature          | Event Bubbling | Event Capturing                          |
// | ---------------- | -------------- | ---------------------------------------- |
// | Direction        | Child → Parent | Parent → Child                           |
// | Default behavior |Yes             | No                                     |
// | Usage            | Most common    | Rare, used for special cases             |
// | Enable           | Default        | `addEventListener(event, handler, true)` |


//stop event bubbling and event capturing  --- method is stopprapogation


//what is es6 features

//arrow function
// template literals 
// default parameter
// let const
// rest and spread operater


// ex tempalet litreals

function myfunction(name="yash"){
    console.log(`My name is ${name}`)
}

myfunction()


// what is hosting concept

// moving function and variable  declartion are top of the page

var a =500
{
    var a = 1000;
}
let b=a
{
    let b =500;
}
console.log(b)


// tell me scope var let and const

// var is global scope and let and const is block scope.


// what is lexical scope?
// means its opposite of closures we can access outer function to inner function

function fun(){
    var a= 20;
    function fun_1() {
        console.log(a)
    }
    fun_1()
}
fun();



// what is closures - inner function can have the acecess of outer function

function k(){
    function b(){
    let y =20;
        console.log(y);
    }
}
k()

// what is callback function in js

function call(callback){
    callback()
    console.log("yash")
}

function by(){
    console.log("bye ")
}
call(by);

// HOC? Higher argument component map,reduce,filter it takes function as an argument and return a new component

// for each and map
// in for each it  just iterate an array in map it craete a new array


// what is slice and splice method have you use yes ?

// in slice not change in orignal array but in splice we can change?


let arry9 = [3,5,6,7];
arry9.splice(2,2);
console.log(arry9);


// what is event loop?
// javascript code run line by lineif we use settimeout or other asyncronus operations means event loop
// 1 - it will check callstack and callbackqueue to run pending tasks also having microtask queue if we take less time in api fetching data that time use micro task queue


//types of events are avilable in  js?
// onclick,onsubmit,onchange

// ex 


const str = "YashManeInterview ";

const result = str.replace(/([A-Z])/g, ' $1').trim();

console.log(result); // "Yash Mane Interview"



// can you tell me class and functional comppnent differnce?


// in functional componet we use react hook to perform operations or functionality in class we use constructer and extend keyword it perform with life cycle methos mounting,updationg and unmounting ?

// in api integration what you will be use  -- axios method, fetch

//how do you test react component jext is a compiler


//can you tell me code spliting it use for testing 

//how does virtual dom work
// in component it already load when i change in jsx file if ican add h1 tag then only the h1 tag will be load by virtual dom not whole component will be load

//different ways to optomise the performance of react?

// use react lazy loading then use suspense also use usemmemo,callack  hook for avoid big calculation and avoid rerendering pages

//can you tell me parameter you can pass in use effect hook?
// function and dependency array if happen [ ] this then it render one time


//why we use contex api --
// 1- To maintain global state
// 2- to avoid prop drilling

//what is prop drilling?
// we can data from parent to child ?

//package.json & package.log having module are atomatically generated 
// package.json is meta data of project it having dependecy that we can use in project.


// what is bold and strong
// highlight text in black color but in strong having importance in conent also we can change color

// what is em and i tag
// em is emphazis text  importance an i is styling purpose we can use it also seo purpose

//cellpadding and cellspacing  == in table 


//can you tell me two rows or colums ?
// 1 row have 12 colmus if we want 4 images thwn we will cut into col-md-4

//tell me figure and image
//  figure tag we can use for image and content purpose 

//what is datalist tag -- is same like dropdown set values in list

//why we use alt attribute
//if image is not display that time it will show image name

// types of css -- inline,internal,external

//shadow effect do a text
{/* <h1 style="text-shadow: 3px 3px 5px black;">
  Shadow Text
</h1> */}


// what is css box-model?

// having CSSContainerRule, padding,bordr,margin

//what is universal selcter

// it denote with * symbol and it css appliy for whole page;

//hide the element in css
// vissiblity hidden;
// display None ; this is use for hidding a elment in bold value








 






