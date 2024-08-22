//let myName = "Piyush"
//let myChannel = "chai"
//console.log(myName.truelength);



let myHeros = ["thor" , "spiderman"]

let heroPower = {
  thor:"hammer",
  spiderman: "sling",

  getSpiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
  }
}

Object.prototype.piyush = function(){
  console.log(`piyush is present in all objects`);
}



Array.prototype.heyPiyush = function(){
  console.log(`Piyush say bye`);
}

// heroPower.piyush()

myHeros.piyush()
 myHeros.heyPiyush()
// heroPower.heyPiyush()

// agar array main power inject kari to vo power object main bhi present hogi 

// Inheritance

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: 'JS Assignment',
  fullTime : true,
  __proto__: TeachingSupport
}

// Teacher.__proto__ = User

// this is called as prototyple inheritance

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsename = "Piyushaurcode      "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  //console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
}


anotherUsename.trueLength()
"piyush".trueLength()
"iceTea".trueLength()




