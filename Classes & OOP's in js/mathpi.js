// a property called getOwnPropertyDrescripter this property shows t=some hidden things about the objects


  const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

  // console.log(descripter);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const chai = {
  name: 'ginger chai',
  price: 250,
  isAvailable: true,


  orderChai : function(){
    console.log("chai nhi bni");
  }

}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// Object.defineProperty(chai , 'name' , {
//   writable: false,
//   enumerable: false
// })


// console.log(Object.getOwnPropertyDescriptor(chai , "name"));
// here chai is not itretable so we use the .entries method
 for (let [key,value] of Object.entries(chai)) {

  if(typeof value !== 'function'){
    console.log(`${key} : ${value}`)
  }
  
  
 }


