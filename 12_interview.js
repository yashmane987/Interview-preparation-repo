// // Can you tell me find method and findindex method
// find methode it array method we can find specifice elemtnt in an array

// and findindex we can find index with the help of array index 


//filter methods all the value in array it shows


const arr = [1,2,3,5,6]
const findev =arr.find((currentvalue)=>currentvalue>5)
console.log(findev);


const arr2 = [4,6,7,8,9]

const arr3=arr2.map((items)=>items*2);
console.log(arr3);

//Can you tell me asyncronus operations 

//  Callback,async await,promises which is best among this all 3 async await is best

if("0"){
console.log("yash is present")
}else{
    console.log("yash is absent")
}

// differnce null and undefined

// null means we can defined value as null 

// undefined means we cannot defined values

let x;

let y = null;


console.log(null===undefined) //false
console.log(null==undefined) //true


const arr7 = [3, 33, 300, 4, 44, 440, 5, 55, 550];

const groups = arr7.reduce((acc, num) => {
  if (num < 10) acc.single.push(num);
  else if (num < 100) acc.double.push(num);
  else if (num < 1000) acc.triple.push(num);
  return acc;
}, { single: [], double: [], triple: [] });

console.log(groups);


let a =4
let b =6
console.log("befor swap",a,b);

[a,b]=[b,a];
console.log("after swapa",a,b)


const d=[2,"a","b",3,"c",4,"d"]

const string =d.filter((items)=>(typeof items==="string"))
const number =d.filter((items)=>(typeof items==="number"))

console.log(string);
console.log(number)

let arr8 = [{id:"2",name:"yash"},{id:"3",name:"mane"},{id:"4",name:"saurabh"}]

let result = arr8.filter((items)=>(items.id>3));
console.log(result)


// what is promise.all method


//which html tags are not close

// br,hr,image,input


// what is div and span tag?
// div is block scope it take full width of Selection
//span is inline element it takeonly width of sepcidfic line

// tell me css box model
// Content,padding,border,margin

//tell me sudo classes 
// :hover, :link -unvisited link

//display none and vissiblity hidden

// hide the element both are used vissiblity hidden are hide element but it takes space and show in transparent 
