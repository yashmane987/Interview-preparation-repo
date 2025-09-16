

// what is promises - its a asyncronus operation having 3 stages in promise 

// 1- pending - wait some time 
//2 - resolve - success,true given condition is satisfied 
//3 -reject - false , not satisfied the condition 

let sum =20

let  a = new Promise((resolve,reject)=>{
try {
    if(sum == 0)
        resolve("give condition is resolve")
    else{
        reject("given condition rejected")
    }
} catch (error) {
    console.log(error)
}
})
a.then((e)=>console.log(e)).catch((e)=>console.log(e))


// map method - create new array with the help of given conditions to multiply the element in ui part show tabale data using map

//reduce -- It is used to reduce an array into one value.

const numbers = [1, 2, 3, 4, 5, 6,7];


const doubled = numbers.map(n => n * 2); // [2,4,6,8,10,12,14]


const filtered = doubled.filter(n => n > 5); // [6,8,10,12,14]


const total = filtered.reduce((acc, curr) => acc + curr, 0); // 50
console.log(doubled); 
console.log(filtered); 
console.log(total); 


// which is best promises and async await

// best is async await beacuse its updated version of promise in db call we use async ans await .


//When we get refence error 
// if we can call function on top with using let and const variable it will show refernce error

// a1();

// const a1 = ( ) =>{
// console.log("yashhhh")
// }

a2()
function  a2(){
    console.log("name")
}
console.log(m);
var m =10;



// features of es6
// arrow function, default parameter, template literals, let, const ,promise, spread ,reset,destructing map,filter,reduce

// destructing ex extract values from array and objects;

const arrr = [1,2,3,4,5,6]

const  [g,b,c,d,e,f ]= arrr

console.log(g,b,c)

// what is temporaldead zone
// when use let and const varible before use it in initialize it shows and refernce error means tmdzone shows error refernce error

var y = 10;
console.log(y++);//10
console.log(y)//11


// what is NAN - it is not a number but it is a number


// what is differnce local and session storage
// local storage dat will not  be vanish when user can close the browser but in session storage data will be close in browser data is not saves when close .



function longest(sentence){
    const words =sentence.split(" ")

  return words.reduce((longest,current)=>current.length>longest.length ? current:longest)

}
const  sentence =" my naaaame is yash ";
console.log(longest(sentence))



const pushhh= [1,2,3,4]
pushhh.unshift(6); 

console.log(pushhh); 



// what is universal selector 
// this selector apply all content of code in our html
// what is i tag and em tag i tag means italic text buy em tagis semanatic having meaning
//attribute selectors - href , alt 

// priority - inline, id,class element
//overlap element - using z index (we give  2 elements then i set z-1 then second one go back)