// pure and impure function

// pure function can always return same output from same input

function pure(a,b){
    return a+b;
}
console.log(pure(2,3))
console.log(pure(2,3))


// impure function 

// always return differnt output in same input


let count = 0;

function increament(){
    count++;
    return count;
}
console.log(increament())
console.log(increament());



// remove duplicate elements in Array

const a = [1,3,2,3,2,4,5,5]

const duplicate =a.filter((items,index)=> a.indexOf(items)!==index)

console.log(duplicate)




const e = [2,33,44,22,43,22,34,52,21,50]
e.sort((a,b)=>(b-a))
console.log(e);


let user = { name: "Yash", age: 22, city: "Pune" };

let str1 = JSON.stringify(user);
console.log(str1);

console.log(typeof str1); 


let str2 = '{"name":"Yash","age":22,"city":"Pune"}';

let obj = JSON.parse(str2);
console.log(obj);

console.log(typeof obj); 


// closusers

function greet(name) {
  return function() {
    console.log("Hello, " + name);
  }
}

const new1 = greet("Yash");

new1();


// promise stages - pending,resolve,reject

// real dom  and virtua dom


//how you can optimize the application


// react router dom