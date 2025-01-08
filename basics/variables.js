
/*
const accountId = 1;
let accountEmail = "lala@gmail.com"
var accountPass = "123456"
accountCity = "Delhi" // bad practice
let accountState

// accountId = 2 // not allowed

accountEmail = "addu@gmail.com"
accountPass= "121212"
accountCity = "Mohali" 

console.log(accountId);
console.table({accountId, accountEmail, accountPass,accountCity, accountState})

// Prefer not to use var
// beacuse of issue in block scope and functional scope

*/

// Add(num1, num2){
//     let num3 = num1+num2;
//     return num3;
// } 

var name = "XYZ";

function sum(){
    let age = 2;
    name = "ABC";
}

age = 3;

console.log(Add(1,3));



