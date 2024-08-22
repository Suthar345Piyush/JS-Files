// SWITCH CASE STATEMENT IN JS 

 // BASIC SYNTAX 

// switch (key) {
  //case value:
    
    //break;
 
  //default:
    //break;
 //}

//  const month = 3
//  switch ("January") {

//   case "January" :
//     console.log("January");
//     break;
   
//   case "February" :
//     console.log("February");
//     break;

//     case "March" :
//       console.log("March");
//       break;
//                // break = bascically break the  control flow statement

//       case "April" :
//         console.log("April");
//         break;

//   default:
//     console.log("default case match");
//     break;
//  }


// TRUTHY AND FALSY VALUES 
  const userEmail = "piyush@123"

  if(userEmail){
    console.log("Got user Email");
  } else {
    console.log("Don't have user Email");
  }

  // falsy values

  //false, 0 ,-0 , BigInt 0n, "", null , undefined ,NaN this all are falsy value

  //truthy values 
  // "0" , 'false' ," " , [] ,{} , function(){} 



 // if (userEmail.length === 0 ){
   // console.log("Array is empty");
  //}

  const emptyObj = {}

  if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
  }
    
  // Nullish Coalescing Operator (??) : null undifined


   //let val1 = 5 ?? 10
   //let val1 = null ?? 10
     //let val1 = undefined ?? 10
  // val1 = null ?? 10 ?? 15


   //console.log(val1);
   



  
   // Terniary operator 
    // condition ? true :false

    const iceTeaPrice = 100
    iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");
