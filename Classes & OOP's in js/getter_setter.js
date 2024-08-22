class User {
  constructor(email , password){
    this.email = email;
    this.password = password
  }// getter and setter is used for when you dont want to give password ti user
    // user both getter and setter at a time



    get email(){
      return this._email.toUpperCase()
    }

    set email(value){
      this._email = value

    }

 get password(){
  return `${this._password}piyush`
 }
   set password(value){
    this._password = value
   }
}

const piyush = new User("p@piyush.ai" , "abc")
console.log(piyush.email);
