// Immediately Invoked Functions Expressions (IIFE)
 
//Global scope ke pollution se problem hoti hai kai bar to us global scope ke variebles hai ya jo bhi decleration hai usko hatane ke liye iife ka use kia 
(function chai(){
  //named iify
  console.log('DB CONNECTED');
})();

( (name) => {
  //unnamed iify
  console.log(`DB CONNECTED TWO ${name}`);
} )('Piyush')

// DO IIFY KO JODNE KE LIYE SEMICOLON(;) LAGANA JARURI  HAI







