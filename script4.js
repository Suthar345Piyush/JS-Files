const message = 'Hello World my name is piyush'

const capitalMessage = message.toUpperCase()// to capital the whole message
const lowerMessage = message.toLowerCase()// to lower the whole message

const faltuMessage = '   hello  world    '
const finalMessage =  faltuMessage.trim()
const finalMessageLowerCase = faltuMessage.trim().toLocaleLowerCase()
faltuMessage.trim() //Using trim to remove the xtra space

faltuMessage.trim().toLowerCase() // for using trim , upper, lower case at a same time

//trim.start for remove starting space and trim.end for remove ending space//


//include = for checking wheather any letter exist in word or sentance or not//


//indexOf = showing the index or number of letter  and -1 for letter which is not in the sentance// 

//replace() = using to replace the word from different word//
//replaceAll() = for replacing all the letter present in the sentance//

//concat() = for joining two different messages//

const lastFourDigits = '5678'
const maskedAccountNumber = lastFourDigits.padStart(16, '*') //padStart

const firstFourDigits  = '2345'
const unMaskedAccountNumber = firstFourDigits.padEnd(8, '*') //padEnd


charAt()

// 'My name is piyush'.charAt(4)  
//result: n and without apply big bracket

charCodeAt()
// 'My name is piyush'.charCodeAt(8)
//result :105 or this is giving code of letter

split()
//it split the whole sentance or put it in an array


//const templateString = `Last four digit of my account number is ` + lastFourDigits
 
const lastFourDigits2 = 5678 // Replace with your actual last four digits
const templateString = `My account number is ${lastFourDigits2}.`



