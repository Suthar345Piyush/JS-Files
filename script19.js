//Shallow Copy and Deep Copy


//Example of primitive data types

//let originalValue = 10;
//let copiedValue = originalValue;

//console.log(originalValue);
//console.log(copiedValue);

//copiedValue = 20;

//console.log(originalValue);
//console.log(copiedValue);


//Example of non-primitive data type like objects, arrays

//let originalValue = {
 // name: 'piyush',
  //age:18
//}

//let  copiedValue = originalValue;


//console.log(originalValue);
//console.log(copiedValue);

//copiedValue.name = 'Suthar'
//console.log(originalValue);
//console.log(copiedValue);


//JSON.Stringify() this method is used to copy objects

//let originalValue = {
  //name: 'piyush',
  //age:18,
  //getName: function(){
    //return this.name;

  //}
//}

//let copiedValue = 
//JSON.parse(
  //JSON.stringify(originalValue)
//);

//console.log(originalValue);
//console.log(copiedValue);

//copiedValue.name = 'Tarun';

//console.log(originalValue);
//console.log(copiedValue);

//With the help of JSON.stringify() method you will able  to create a deep copy of your non primitive data types

//the disadvantage of JSON.stringyfy() method is this when you have a function type in your object then this method can not copy the object


//Another method to copy the object is Object.assign()
//it takes two arguments the 1.reference of your object ,2. object name


//let originalValue = {
  //name: 'Piyush',
  //age: 18,
  //getName : function(){
    //return this.name;
  //},
  //adderss:{
    //city: 'Jaipur',
    //country : 'India',

  //}
  //}


//let copiedValue = Object.assign(
  //{}, originalValue 
  //);

  //console.log(originalValue);
  //console.log(copiedValue);

//copiedValue.name = 'Tarun';
//copiedValue.adderss.city = 'Delhi';


//console.log(originalValue);
  //console.log(copiedValue);

  // the method Object.assign() gives you a partial deep copy of the object OR it is not work properly when you have a nested data structure


//Another method is the spread operator(...)

let originalValue = {
  name: 'Piyush',
  age: 18,
  getName : function(){
    return this.name;
  },
  adderss:{
    city: 'Jaipur',
    country : 'India',

  }
  }

  let copiedValue = {...originalValue};

 // copiedValue.name = 'Suthar';
  //copiedValue.adderss.city = 'Mumbai';
  //copiedValue.adderss.country = 'japan';

copiedValue = {
  ...copiedValue,
  name : 'Suthar',
  adderss: {
    city: 'Mumbai',
    country : 'japan'
  }
}



  console.log(originalValue);
  console.log(copiedValue);

  //the spread operator  gives deep copy of your object 

  













  



