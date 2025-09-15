// charAt method is use for  to print string into specific index useing this method


let arr = "Yash";
console.log(arr.charAt(3));

let str = "hello";
console.log(str[1]);



// undeclare and undefined

// undeclare ex  
  
// console.log(x); 

// undefined ex 

let x;
console.log(x)


// shallow copy  &  deep copy

// shallow copy it will copy object refrencences 

// but in deep copy it will not copy refrences

// ex shallowcopy

const userinfo ={
    name: "yash",
    surname:"mane",
    address :{
city:"karad",
pincode:415-404
    }
}

const obj2 = {...userinfo}
obj2.name = "raj"
obj2.address.city="kasegaon";
console.log(obj2);

// deep copy ex

const obj1 ={
    name:"kiran",
    address:{
        city:"rabale",
        pincode:415404
    }
}

const obj3= JSON.parse(JSON.stringify(obj1));
obj3.address.city = "delhi"
console.log(obj1);


console.log(100 + "20" + 30); //1002030
console.log(100-"20" -30);  //50
console.log("100" * "20" -30); //1970



let abc = 100;
if (function xyz(){}){
abc = abc - typeof(xyz)  // typeof x is undefined so javascript convert number into undefined so output will be not a number

}
console.log(abc)


function bcd(){
}
console.log(typeof(bcd))



// splice - add , remove and repalace arrray elements, splice methods are mutable
// slice - method is immutable cannot change .

// let arr2 = [0,1,2,3,4]
// arr2.splice(2,2)
// console.log(arr2);

// let arr4 = [1,2,3,4,5];
// arr4.slice(2,3);
// console.log(arr4);


// let arr5 = [1, 2, 3, 4];
// console.log(arr5.slice(1, 3));  // 2 3
// console.log(arr5.splice(1, 3)); // 1
// console.log(arr5);  

// Slice its a array method ,
// slice are immutable 



const a = [3,5,6,8,9]
let s = a.slice(1,4) //start index 1 and print before index 4
console.log(s)


// splice - ita a array method , it is muttable we can add ,remove and replaceing array

const a1=[2,4,6,7,8];
 a1.splice(1,2); //start index 1 and remove 1index snd 2 index value
console.log(a1);



let obj ={
    name: "yash",
    pqr:function(){
    console.log(this.name)
    }
}
const c = obj.pqr
obj.pqr();
c();


let arr7= ["yash",'abc']
let ans = arr7.includes('ABC',-2)
console.log(ans);