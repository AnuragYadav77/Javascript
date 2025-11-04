//Arrays are OBJECTS

const myArray=[1,2,true,"string"]; //arrays are heterogenous i.e. elements can be differnt inside an array
//  console.log(myArray);
// console.log(typeof myArray); //object
// console.log(myArray[2])

// NOTE:Arrays are dynamic (resizable) in js,they can grow and shrink as elements are added or removed.

//one more way to declare an array:
const anotherArray= new Array(1,2,3,4,5);
// console.log(anotherArray[3]);
// console.log(anotherArray.length)

//Objects use names to access its "members":
const person = {firstName:"John", lastName:"Douglas", age:46};
//  console.log(person.age);

//Array Elements Can Be Objects: JavaScript variables can be objects. Arrays are special kinds of objects.Because of this, you can have variables of different types in the same Array.You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
//myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;

//LOOPING THROUGH AN ARRAY
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;
for(let i=0; i<fLen; i++){
    // console.log(fruits[i]);
}
//Adding elements with high indexes can create holes in an array:
fruits[6] = "Lemon"; //creates a hole at index 4 and 5
// console.log(fruits);
// console.log(fruits.length); //7


//ASSOCIATIVE ARRAYS
//Arrays with named indexes are called associative arrays (or hashes).
//In JavaScript, arrays use numbered indexes. 
//JavaScript does not support arrays with named indexes.
const person2 = [];
person2[0] = "John";
person2[1] = "Doe";
person2[2] = 46;
// console.log(person2.length);    // Will return 3
person2.push("Engineer");
// console.log(person2.length);    // Will return 4 
// person2[0];   
// console.log(person2);

//WARNING !!   :    If you use named indexes, JavaScript will redefine the array to an object.After that, some array methods and properties will produce incorrect results.\
const person3 = [];
person3["firstName"] = "John";
person3["lastName"] = "Doe";
person3["age"] = 46;
// console.log(person3.length);    // Will return 0
// console.log(person3[0]);  // Will return undefined
//DIFFERNCE BETWEEN ARRAYS AND OBJECTS
//In JavaScript, arrays use NUMBERED indexes.  
//In JavaScript, objects use NAMED indexes.

///A Common Error:
const elements=[40]; //creates an array with one element
console.log(elements);
///BUT
const elem=new Array(40); //creates an array with 40 undefined elements
console.log(elem);




/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//ARRAY METHODS
 
//push() - adds an element to the end of the array
anotherArray.push(6);
// console.log(anotherArray);
// console.log(anotherArray.length); 

//pop() - removes the last element from the array
anotherArray.pop(); //no argument shall be passed
// console.log(anotherArray);


