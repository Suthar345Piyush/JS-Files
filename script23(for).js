
//forin loop 

//const myObject = {
 // js: 'javascript',
  //cpp:'C++',
  //rb:'ruby',
  //swift: "swift by apple"

//}

//for (const key in myObject) {
  //console.log(`${key} shortcut is for ${myObject[key]}`);
  
 
    
  //}

  //const programming = ["js" , "java" , "cpp" , "rb" , "py"]

 // for (const key in programming){
   // console.log(programming[key]);
  //}

//foreach loop


  //const coding = ["js" , "java" , "cpp" , "rb" , "py"]

  //coding.forEach(function (val) {
    // console.log(val);

  //})
  
const myCoding = [
  {
    languageName : "javascript",
    languageFileName : "js"
  },

  {
    languageName : "java",
    languageFileName : "java"
  },

  {
    languageName : "python",
    languageFileName : "py"
  }
]

myCoding.forEach((item) => {
  console.log(item.languageName);
})

