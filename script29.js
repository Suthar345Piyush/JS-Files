//This(keyword) and arrow function in js

//this current context  ko refer karta hain
// context mtlab values ki variebles kya kya hold karte hain


const user = {
  username : "Piyush",
  price :999,

  welcomeMessage : function(){
    console.log(`${this.username} , welcome to website `);
    //console.log(this);
  }
}

//user.welcomeMessage();
//user.username = "Sam";
//user.welcomeMessage();

//console.log(this);

// browser ke ander jo object hai vo window object hai 

//function chai(){
  //let username = "piyush"
  //console.log(this.username);
//}

//chai()

const chai = () => {
  let username = "Piyush"
  console.log(this.username);
}

chai()
// to change this just replace the function to arrow sign and then it will be converted into arrow function


//ARROW FUNCTION

// Basic syntax of arrow function in js is () => {}

//const addTwo = (num1 , num2) => {
  //return num1 + num2
//}




// this method is known as implicit method (return in one line means not needd to write return) curly braces{} use kiye to return  likhna hai aur parenthesis() use kiye to return keyword nhi likhna hai


//const addTwo = (num1 , num2) =>  num1 + num2



//Agar object return krna ho to aise krna hai 
// object ko return krne ke liye parenthesis() main daalna padega
const addTwo = (num1 , num2) => ({username : "Piyush"})




console.log(addTwo(3 , 4));


