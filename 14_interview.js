// show me ex of closure

function myfunction(){
    var name = "yash"
    function second(){
    var surname="mane"
    console.log(surname,name)
    }
  second();
}
  myfunction()



//   ex of callback

function newfunction(callback){
callback()
console.log("new name yash")
}

function secondfunction(){
    console.log("second function is called")

}

newfunction(secondfunction);



// rest operator ex

const arrr = [1,4,5,6,7,8,9]

const result = arrr.reduce((accumaletervalue,currentvalue)=>{
    return accumaletervalue+currentvalue
})
console.log(result)


