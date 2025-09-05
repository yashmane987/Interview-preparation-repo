// console.log("start");

//How to right arrow function
const a = () => {
  console.log("start");
};
a();

//How to right normal function
function myfunction() {
  console.log("start function");
}

myfunction();

// ex of for loop
for (i = 0; i < 10; i++) {
  console.log("numer :", i);
}

// ex of callback
// function myfunction(name, callback) {
//   console.log("hi", name);
//   callback();
// }

// function by() {
//   console.log("goodby");
// }

// myfunction("yash", by);

// spread parameter
const ar = [1, 4, 3, 2, 22, 12];
const ar1 = [...ar, 24, 55];
console.log(ar1);

// rest parameter
function sum(...num) {
  return num.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 4, 5));

//Template literachal

const name = "yash";

console.log(`hi , ${name}`);

// default parameter

function greet(name = "guest") {
  console.log(`hi, ${name}`);
}

greet();

// Arrow function
setTimeout(() => {
  console.log("start");
}, 4000);

let x = 0;
console.log(x);

// // Async function to fetch users
async function fetchuser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("Users", data);
  } catch (error) {
    console.log(error);
  }
}

fetchuser();

//  ex how to revrese a string
const str = "yash".split("").reverse().join("");
console.log(str);

//ex how to sort array and show first value in output

const array = [22, 11, 33, 21, 3, 54, 2, 14];

array.sort((a, b) => a - b);
const lowest = array[0];
console.log(lowest);

const success = false;

const promise = new Promise((resolve, reject) => {
  if (success) {
    resolve("consition is success");
  } else {
    reject("consition is reject");
  }
});

promise.then((msg) => console.log(msg)).catch((err) => console.log(err));

// remove element in array

let array1 = [1, 3];
array1.pop(1);
console.log(array1);

// filter specific number

let arr = [2, 3];
let arr1 = arr.filter((x) => x > 2);
console.log(arr1);
