// write code fin=bonnaci series

// 0 1 1 2 3 5

function fibannaci(n) {
  let a = 0,
    b = 1;

  for (i = 0; i < n; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
  }
}
fibannaci(10);

const obj = [
  {
    name: "yash",
    age: 24,
  },
  {
    name: "kiran",
    age: 30,
  },
  {
    name: "yash",
    age: 14,
  },
];

let obj1=obj.filter((items)=>{
    return items.name.length>4;
})
console.log(obj1)


function abc(a,...b){
    console.log(b,typeof b)
}
abc(10,8,7)

// useCallback,apply,bind
// modifications of this value 

// call method takes individual elements as a paremetres

// bind - take a parameter as Array

// call and apply both are invokey immediately


//HOC Higher order component
// are the component that can take other component as argument and then return a new component

// usestate is syncronus or not 

// usestate is syncronus but when state update it will asyncronus

// what is jsx - javascript xml we can write html inside javscript
// what is babel - babel can convert over jsx code intobrowser redable code.


//what is virtual dom -  it will onlyupdate the new changes not whole application willbe load in virtual dom

//what is  progress tag and meta tag 
// progress tag show progress means loading of task and having syntax like <progress> value and max
// in meta tag having meta data of html page means header sections and foter like that


//what is image and figure tag

// image is inline element but figure is block level element
// seo purpose is limited using image tag but seo purpose is  best for figure tag.

//what is div tag and span tag
// div is block Element
// span tag  is inline

//what is border and outline

// border takes  space and outline does not take space 
// border we can apply css line border :3px solid palin
//  outine :3px solid palin

//  outline use for focus or highlight purpuse use 
// border use for border the button it show round and it in bettenhaving padding and margin


// Pseudo-class → describes state (:hover, :focus, :first-child).

// Pseudo-element → selects part of an element (::before, ::after, ::first-line).