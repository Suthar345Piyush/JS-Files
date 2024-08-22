// Promises in JS

const promiseOne = new Promise(function(resolve , reject){
  //Do an async task
  // DB calls , cryptography , network calls

  setTimeout(function(){
    console.log('Async task is compelete');
    resolve()
  } , 1000)
  
})

// .then have directly connection with resolve and they are connected by each other through using resolve()
// when the promise is resolved then it means the async operation complete successfully


promiseOne.then(function(){
  console.log("Promise consumed");
})


new Promise(function(resolve , reject){
  setTimeout(function(){
    console.log("Async task 2");
    resolve()
  }, 1000)


}).then(function(){
  console.log("Async 2 resolved");
})



const promiseThree = new Promise(function(resolve , reject){
  setTimeout(function(){
    resolve({username: "Piyush" , email: "piyush@example.com"})

  }, 1000)
})



promiseThree.then(function(user){
   console.log(user);
})
 // basically data consumption hua hain 

 const promiseFour = new Promise(function(resolve , reject){
  setTimeout(function(){
        let error = true  
          
        if(!error) {
          resolve({username: "suthar" , password: "456"})
        }
          else{
            reject('ERROR: Something went wrong')
          } 

  }, 1000)
 })

promiseFour
.then((user) => {
      console.log(user);
      return user.username
})
.then((username) => {
  console.log(username);
})
.catch(function(error){
  console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))
//finally is used for cleanup operations irrespective of whether the promise is resolved or rejected
//catch is used for error handling



const promiseFive = new Promise(function(resolve , reject){
  setTimeout(function(){
        let error = true
          
        if(!error) {
          resolve({username: "piyushSuthar" , password: "456"})
        }
          else{
            reject('ERROR: JS went wrong')
          } 

  }, 1000)
 });

//async await syntax = basically ye thode der wait krta hain kam karne ka agar vo ho jata hai to vo aage bhadta hain varna vahi error deta hain 
// in this we also use try catch method 

async function consumePromiseFive(){
   try{
    const response = await promiseFive
    console.log(response);
   } catch(error) {
    console.log(error);
   }
  }

consumePromiseFive()


// async function getAllUsers(){

//     try{
//       const response = await fetch('https://jsonplaceholder.typicode.com/users')
//       const data = await  response.json()
//       console.log(data);
//     } catch (error) {
//       console.log("E: " , error);
//     }


  // const response = await fetch('https://jsonplaceholder.typicode.com/users')
  // const data = response.json()
  // console.log(data);
//}


//getAllUsers()


fetch('https://api.github.com/users/hiteshChoudhary')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);
})
.catch((error)  => console.log(error))





