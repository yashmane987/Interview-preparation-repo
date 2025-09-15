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








