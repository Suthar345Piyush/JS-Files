//Scopes in JS 

// {} = curly braces are known as scope in js other than objects 


let a =400

if (true){
  let a = 10
  const b = 20
 console.log("INNER : " , a);
 

}

// code written inside if is "Blocked scope" , the blocked scope values are not be present in global scope (outside)


// code written outside if if "Global scope" , the global scope values are available in blocked scope




console.log(a);
//console.log(b);
//console.log(c);
// from their 'var' is avoided in js




