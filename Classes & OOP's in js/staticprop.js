// static properties in js 

class User {
  constructor(username){
    this.username = username
  }
 
   logMe(){
    console.log(`Username; ${this.username}`);
   }


   static createId(){ // static property ko acsess hone se rok deta hain 
    return `123`
   }



}


const piyush = new User("piyush")
//console.log(piyush.createId())


class Teacher extends User{
  constructor(username , email){
    super(username)

    this.email = email
  }
}

const iphone = new Teacher("iphone" , "i@phone.com")
console.log(iphone.createId());










