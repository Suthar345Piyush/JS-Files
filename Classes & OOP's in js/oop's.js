const user = {
  username: "piyush",
  loginCount: 5,
  signedIn: true,
   
   getUserDetails: function(){
     //console.log("Got user details from DB");
    // console.log(`Username: ${this.username}`);
    console.log(this);
   }
}

//console.log(user.username);
//console.log(user.getUserDetails());

//console.log(this);

// constructer function

//const promiseOne = new Promise() //basically this new keyword is constructer function
//const date = new Date()

function User(username , loginCount , isLoggedIn){
  this.username = username; // thier LHS is variebles and RHS vali jo aap pass karke de rahe ho
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn


  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
  }
}

return this 


const userOne = new User("piyush" , 13 ,true)
const userTwo = new User("suthar" ,13,false )
console.log(userOne.constructor);
console.log(userTwo);










