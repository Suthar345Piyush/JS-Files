const username = prompt('Please enter your Name.')  || 'Piyush';
const userAge = parseInt(prompt('Please enter your Age.')) ||  18 ;


console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);



if(userAge >= 0 && userAge <= 4);
 
  console.log( `${username} is a child.`);
  console.log('He is playing on the bed.');


elseif (userAge >= 5  && userAge <= 17);
 console.log(`${username} is a school student.`);
 console.log('He is learning javascript.');



elseif (userAge >= 18   &&  userAge <= 24); 
console.log(`${username} is a college student.`);
console.log('He is learning javascript.'); 


elseif (userAge >= 25 && userAge <= 45 )  
console.log( `${username} is a retierd person.`);
console.log('And he reads newspapers.');
 

console.log('Program Ended');




