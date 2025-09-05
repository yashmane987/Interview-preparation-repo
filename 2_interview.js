
//Show addition of 10 but show that element in index in output
const arr = [ 8,1,5,4, 6, 11]
const ans = []
for(let i=0;i<arr.length-1;i ++){
    for(let j = i+1; j<arr.length;j++){
        if(arr[i]+arr[j] == 10){
            ans.push(i);
            ans.push(j);
        }
    }
}
console.log(ans)

// in JavaScript checks if a value is Not-a-Number
// it will return  a boolean value
console.log(isNaN("Yash"))





// show this string in alteranate way ydaesvhe
let str1 = "developer";
let str2 = "yash";

let result = "";
let maxLen = Math.max(str1.length, str2.length);

for (let i = 0; i < maxLen; i++) {
  if (i < str1.length) result += str1[i];
  if (i < str2.length) result += str2[i];
}

console.log(result);

// diffrence for each and map method

// foreach - not create a new array
//           in foreach method array are modified
          
// map -   create a new array 
//         in map method array are not modified


// ex foreach
const numbers = [1, 2, 3, 4];
let sum = 0;

numbers.forEach(num => {
  sum += num;  
});

console.log(sum); 

// ex map

const numb = [1, 2, 3, 4];

const doubled = numb.map(num => num * 2);

console.log(doubled);




// pure function:- Always produces the same output for the same input.
//impure function :- Can produce different outputs for the same input.


// ex pure function

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); 
console.log(add(2, 3)); 


//ex impure function

let factor = 2;

function multiply(num) {
  return num * factor;
}

console.log(multiply(5)); 
factor = 3;
console.log(multiply(5)); 


//What is Annomus function 

// anonymous function is a function without a name.

const greet = function() {
  console.log("Hello!");
};

greet();

// What is rest and spread operater

// rest operater --  The rest operator is used to collect multiple elements into a single array.
// spread operater -- it is copy our whole object or array with this ...;

// ex rest operter

const array = [1,2,3,4,5];
const d = [...array,6,7,8]
console.log(d)


// ex spread operater

// reduce goes through each element of the array and accumulates a single value.
function sum1(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum1(1, 2, 3, 4)); 

// differnce Primitive and non-Primitive

// Primitive datatypes - Number,string,Boolean,undefined,Null are immutable 

// non-Primitive - array,objects,functions are muttable


// primative and non-primative when compare non-p matches the refernces.
console.log({} == {});
// console.log({} === {});

// Which one is better async await , promises 

// better is asyn and await are latest version of promise 