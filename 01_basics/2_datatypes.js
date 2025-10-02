"use strict"; // now all JS code will be treated as newer version of JS.
// alert(3+3); // it works on browser only but here we are using nodejs.


let name="asd" //string datatype
let age=98 //numeric
let isLogged= true //boolean
//DATATYPES :
             //number -> -(2^53 -1) to (2^53-1) (Safe Integer Range)
             //bigint -> arbitrarily large integers(no fixed range) 
             //string -> ""
             //boolean -> true/false
             //null -> standalone value
             //undefined -> means the value has not been assigned yet
             //symbol -> used for 'uniqueness'
             //object

console.log(typeof "asdf")
console.log(typeof age)
//but
console.log(typeof null) //type comes out to be an 'object'
console.log(typeof undefined) //type -> undefined.


