const fs = require('fs')



fs.readFile('RightLeft.txt','utf8',(err,data)=>{
console.log(typeof data )
var array = data.split("")

console.log(array)

const leftTurn =[]
const rightTurn =[]

 array.forEach(myfunction)

function myfunction(e){
if (e==='<'){
  leftTurn.push(e)
} else if (e=== '>'){
rightTurn.push(e)
}}

console.log(leftTurn.length)
console.log(rightTurn.length-leftTurn.length)
})
//next time you would be better of creating a variable counter and do plus plus here you create an array and make it bigger and bigger cpu wise this isnt the best approach keep up the good work
