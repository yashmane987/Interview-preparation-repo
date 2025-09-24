//create a function with show in output first reapeated character in string?


function firstRepeatedChar(str) {
  return str.split("").find((c, i) => str.indexOf(c) !== i) || null;
}
console.log(firstRepeatedChar("yashassh"));



//you need to write array in differnt in string and number

const arr = [2, 3, "a", "b", 4];


const numbers = arr.filter(item => typeof item === "number");
const strings = arr.filter(item => typeof item === "string");

console.log("Numbers:", numbers); 
console.log("Strings:", strings); 


//differnt types of pop up browser model

// 1-prompt
// 2-confirm
// 3-alert


//what is null and undefined


let a;

let b = null;




//
// Q----
function abc(){
    var a =10;
}
console.log(a);


// . function abc() { var a = 10; }

// This defines a function named abc.

// Inside the function, you declare a variable a with var.

// var is function-scoped, which means it only exists inside the function.

// Outside the function, a does not exist.



// differnce var,let and const

// var it is global scope if it is not declare in function then otherwise it is function scope , in let it block scope,const also blockscope

// in var we can reassign and redclare are availabel but in let we can reassign value but not redeclare 
// in const once we create we cannot redclare or reassign


// can you tell differnce function declaration and function expression
 
// 1 - function declaration are hoisted          1 - function expression are not hoisted
// 2 - name required in functiondeclaration      2-name is optional in functional expression


// function declaration ex                         
                        
function myfunction(){                               
    console.log("yash")            
}
myfunction();




//function expression ex


const greet = function() {
    console.log("Hello!");
};
greet();


//can you tell me types of list in html

// orderlist number in list 
// unorderlist show dot in list


//what is formating tags  means change in text

//bold,strong,italic,em,small,sub,sup,underline


//can we display web  page inside another page

// using <iframe> Tag


//meter and progress tag

// Meaning	Represents a measurement within a range	Represents task completion
// Semantic Use	For stats, scores, levels	For progress of a process
// User Interaction	Not interactive	Not interactive
// Display	Filled proportionally, can have min/low/high	Simple progress bar\


//can you tell me display a table which can use?

// table,tr,th,tr,tr,td,tr,table\


//positioning properties in css
// relative,sticky,absolute,fixed



// can you tell box-sizing property

//  box-sizing: content-box
//    box-sizing: value;
//     box-sizing: border-box;


