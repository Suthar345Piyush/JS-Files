//Scope level and   mini hoisting(Lec - 22 from chai aur code)

function one(){
   const username = "Piyush Suthar"

   function two(){
    const website = "Google"
    console.log(username);

   }

   //console.log(website);

   two()

}
 //one()

 // Jab nested functions hote hain to child functions parents ke veriable ko acsess kr pate hai 


 if(true){
   const username = "Piyush"
   if(username === "Piyush"){      
      const website = "Youtube"
      //console.log(username + website);
   }

   //console.log(website);

 }

 //console.log(username);



 // +++++++++++++++++++++Intresting++++++++++++++++++++++++++++
 console.log(addone(5))
 function addone(num){
   return num + 1
  
 }
 



 
 addTwo(5) // it gave an error due to concept of hoisting 
 const addTwo = function(num){
   return num + 2
 }
