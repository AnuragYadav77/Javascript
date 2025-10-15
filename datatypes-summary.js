// Datatypes are classified on the basis of "The method in which data is stored in memory and accessed", into two types:
// 1. Primitive Datatypes
// 2. Non-Primitive Datatypes

//*****Primitive*****/
//7 types
// Primitive are "CALLED BY VALUE" means when we copy the data stored in them then the original reference of the memory is not given instead a new copy of the data is created in a new memory location and the reference of that new memory location is given.So the changes we make in the copied data will not be reflected in the original data.


// 1.String 
// 2.Number 
// 3.Boolean
// 4. Null
// 5.undefined(means variable is declared so is the memory allocated but value is not assigned yet)
// 6. Symbol
// 7.BigInt(Scientific values are handled).

const id=Symbol('123')
const id2=Symbol('123') 
console.log(id===id2)// gives 'false' even if the description/value inside both of them is same, it will create a new symbol

const bigNumber =123456787654323456765432n // 'n' at the end tells that it is a BigInt
//OR
const bigNumber2 = BigInt(123456787654323456765432)
// console.log(typeof bigNumber)
// console.log(typeof bigNumber2)



//*****Non-Primitive(Reference type)*****/
// their reference in the memory is directly copied and allocated to the user.So if we make any changes in the copied data then it will be reflected in the original data as well.

// THE DATATYPE OF NON-PRIMITIVE IS "OBJECT" IN JS AND THE RETURN TYPE OF FUNCTION IS "FUNCTION".

//1. Array
//2. Objects
//3. Functions 
const heroes = ['shaktiman','naagraj','doga'] //Array
console.log(typeof heroes) 

//object
let myObj={
    name:"bruce",
    age:22,
}
console.log(typeof myObj) 

//function(it can also be treated like a variable in js)
const myfunction =function(){
    console.log("hello world")

}
console.log(typeof myfunction) 