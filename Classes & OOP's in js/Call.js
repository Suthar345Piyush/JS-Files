function  SetUsername(username){
  //Complex Db calls
  this.username = username
  console.log("called");

}


function createUser(username , email , password){

    SetUsername.call(this , username) //.call used to hold the referance , this is optionally here using our own's this

  this.email = email
  this.password = password
}


const game = new createUser("game" , "game@fb.com" , "123")
console.log(game);

