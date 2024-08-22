// functions in js:

// jada lines ke code ko ek package main band kardiya hai jab chahe uski copies li ja skti hain  this are called as functions 

function sayMyName(){
  console.log("p");
  console.log("i");
  console.log("y");
  console.log("u");
  console.log("s");
  console.log("h");
  
}
//sayMyName() // here,sayMyName is an referance(rehta hain) and parenthesis is indicate to the execution of the code .

function addTwoNumbers(number1 , number2){
  console.log(number1 + number2);

   //let result = number1 + number2 
     //return result  // result ke baad kuch bhi print nhi hota hain
     return number1 + number2 
}

 const result = addTwoNumbers(3 , 8)

 //console.log("Result: " , result);

// here numbers are parameters and null are argument

function loginUserMessage(username = "piyush"){
  if(!username){

    console.log("Please enter a username");
    return 

  }
  return `${username} just logged in`

}

//console.log(loginUserMessage("piyush"))
console.log(loginUserMessage())





