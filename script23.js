//high Order Array loops
//1. for of 

//["" , "" , ""]
//[{} , {} , {}]


//yaha pe object ka mtlab hai ki kis pe loop lagana hai


// yaha number hain to num likha
//const arr = [1,2,3,4,5]
//for (const num of arr) {
  //console.log(num);
//}


// yaha character hain to char likha
//const greetings = "Hello world!"
//for (const greet of greetings){
  //console.log(`Each char is ${greet}`);

//}


// Maps

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")



for (const [key,value] of map) {
//yaha pe array ka destructure h jata hain 
//key and value is a part of syntax


console.log(key, ':-' , value);
}

// forof loop not work on objects
//const myObject = {
  //'game1' : 'NFS',
  //'game2' : 'Spiderman'
//}

//for (const [key , value] of myObject) {

  //console.log(key, ':' , value);
//}
