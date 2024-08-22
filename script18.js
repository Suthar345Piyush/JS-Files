// MULTIDIMENSIONAL ARRAYS(an array inside an  array)


const marvel_heros = ["thor", "Ironman", "spoiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);


//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

//it can be done using spred property (...)



const all_new_heros = [...marvel_heros,...dc_heros]

//console.log(all_new_heros);


//use of flat property 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);


//use of from property
//when you scraping the data , when you select data from webpage that data comes in diffrent form like comes in node list or in objects or in string but you want it into array and their you use "from" property


console.log(Array.isArray("Piyush"))
console.log(Array.from("Piyush"))
console.log(Array.from({name : "Piyush"})) 

//Example of adding different arrays

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1 , score2 , score3 ).join(","));
//result : 100 ,  200 ,  300 

console.log(JSON.stringify(Array.of(score1, score2, score3)));








