// singleton

//object literals


const mySym = Symbol("key1")
// use symbol as a key


const jsUser = {
  name: "piyush suthar",
  "full-name": "Piyush suthar",// not acsess by dot 
  [mySym]: "myKey1",
  age:18,
  email: "piyushsuthar@gmail.com",
  isLoggedin: false

}

//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["full-name"]);
//console.log( jsUser[mySym]);



//for changing the values of objects
jsUser.email = "piyushsuthar@hello.com"
//We use Object.freeZe property to protect from changing the value of object
//console.log(jsUser["email"]);
//Object.freeze(jsUser)
jsUser.email= "piyushsuthar@hy.com"
//console.log(jsUser);

//in js functions are treat like variables

jsUser.greeting = function(){
  console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`);

}
//when you have to reference to same object then use this.

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());





