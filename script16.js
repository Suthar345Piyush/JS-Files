//const metaUser = new Object()  // this is singleton object

const metaUser = {}// this is non singleton object

metaUser.id = "123cvb"
metaUser.name = "harry"
metaUser.isLoggedin = false

//console.log(metaUser);
const regularUser  = {
  email: "some@gmail.com",
  fullname : {
    userfullname: {
           firstName : "piyush",

           lastName : "suthar"      
    }
  }

}


//console.log(regularUser.fullname.userfullname);
 

//objects ko combine krna aa skta hai
 
const obj1 = {1: 'a' , 2: 'b'}
const obj2 = {3: 'a' , 4: 'b'}
const obj3 = {5:'a',   6: 'b'}

//const obj3 = {obj1,obj2}
// {} this will act as a target and remaning assigned objects are act as a source



//const obj4 = Object.assign({} , obj1, obj2, obj3)


const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4);


const users = [
  {
    id: 1,
    email: "p@gmail.com"
  },
 
  {
    id: 1,
    email: "p@gmail.com"
  },

  {
    id: 1,
    email: "p@gmail.com"
  }
  
]

users[1].email
console.log(metaUser);

console.log(Objects.keys(metaUser));
