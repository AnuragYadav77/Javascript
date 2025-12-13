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
// console.log(elements);
///BUT
const elem=new Array(40); //creates an array with 40 undefined elements
// console.log(elem);




/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//ARRAY METHODS
 
//push() - adds an element to the end of the array
anotherArray.push(6);
// console.log(anotherArray);
// console.log(anotherArray.length); 

//pop() - removes the last element from the array
anotherArray.pop(); //no argument shall be passed
// console.log(anotherArray);

//shift() - removes the 'first' array element and "shifts" all other elements to a lower index
const shiftArray=[1,2,3,4,5];
// console.log(shiftArray.shift()); //1
// console.log(shiftArray); // [2,3,4,5]


//unshift()-The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
const unshiftArray=[2,3,4,5];
unshiftArray.unshift(1);
// console.log(unshiftArray); // [1,2,3,4,5]


//length()- returns the length of the array.It can also be used to set the length of the array.
const lenArray=[1,2,3,4,5,6,7,8,9]; //original length=9
lenArray.length=5; //sets the length to 5
// console.log(lenArray); 

//NOTE:The length property provides an easy way to append a new element to an array:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2[fruits2.length] = "Kiwi";
// console.log(fruits2); //["Banana", "Orange", "Apple", "Mango", "Kiwi"]




//toString() - returns the elements of an array as a comma separated string
const strArray=[10,20,30,40,50];
const str=strArray.toString();
// console.log(str); // 10,20,30,40,50

//at() - returns the element at the specified index
// console.log(strArray.at(4));

//WARNING!! : Negative indexing is not allowed in JS to access an element from the end of an array, because [] is used for accessing both arrays and objects.


// join() - joins all elements of an array into a string.It behaves just like toString(), but in addition you can specify the separator:

const joinArray=["Hello","World","from","JS"];const joined=joinArray.join("--");
// console.log(joined);


// concat() - The concat() method creates a 'new array' by merging (concatenating) existing arrays. it can take any number of array arguments:
const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const array3 = ["Robin"];
// console.log(array1.concat(array2,array3));
//it also takes strings as arguments.
// console.log(array2.concat("peter"))


//copyWithin() -  The copyWithin() method copies array elements to another position in the array, overwriting the existing values.It does not add items to the array.
const copyArray=["A","B","C","D","E","F","G"];
// console.log(copyArray.copyWithin(2,0)); //copy to index 2, all elements from index 0
//the remaining elements are shifted accordingly but the length remains same.
//output: ["A","B","A","B","C","D","E"]
//The copyWithin() method overwrites the existing values.



//Flattening an Array:
//Flattening an array is the process of reducing the dimensionality of an array.Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.

//flat(depth)-creates a new array with sub-array elements concatenated to a specified depth.default depth is 1.
const flatArray=[1,2,[3,4],[5,6]];
const flatArray2=[[1,2],[3,4],[5,[6,7]]];
// console.log(flatArray2.flat(2)); //here depth is 2
//The depth level specifying how deep a nested array structure should be flattened


//flatMap() - first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1.
//syntax: array.flatMap(function(currentValue, index, arr), thisValue)
const flatMapArray=[1,2,3,4];
// console.log(flatMapArray.flatMap()); // no mapping function provided here
//output: [1,2,3,4]
//In this example, since no mapping function is provided, flatMap() simply returns a shallow copy of the original array.
// console.log(flatMapArray.flatMap(x => [x, x * 2]));


//SPLICING AND SLICING ARRAYS

//splice() - The splice() method adds/removes items to/from an array, and returns an array with the deleted/removed item(s).
const spliceArray=["Jan","March","April","June"];
//  console.log(spliceArray.splice(1,0,"Feb")); //inserts at index 1, 0 elements removed.IT RETURNS AN EMPTY ARRAY AS NO ELEMENTS ARE REMOVED.
//The first parameter (1) defines the position where new elements should be added (spliced in).The second parameter (0) defines how many elements should be removed.The rest of the parameters define the new elements to be added.
// console.log(spliceArray); //["Jan", "Feb", "March", "April", "June"] 



//toSpliced()-The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.



//slice()- The slice() method returns a 'shallow copy' of a portion of an array into a new array object selected from start to end (end not included).The original array will not be modified.
const sliceArray=["Jan","Feb","March","April","May","June"];
const newSliceArray=sliceArray.slice(1,4); //from index 1 to index 4(not included)
// console.log(newSliceArray); //["Feb", "March", "April"]
// console.log(sliceArray); //original array remains unchanged




/*+++++++++++++++++++++++++++++++ARRAY SEARCH METHODS++++++++++++++++++++++++++++++++++++*/

//indexOf()- returns the first index at which a given element can be found in the array, or -1 if it is not present.


//lastIndexOf()- returns the last index at which a given element can be found in the array, or -1 if it is not present.

//includes()-to check if an element is present in an array (including NaN, unlike indexOf)

//find()- returns the value of the first element that passes a test function.
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
// console.log(first); //25
function myFunction(value, index, array) {
  return value > 18;
}

//findIndex()- returns the index of the first array element that passes a test function.
const nums = [4, 9, 16, 25, 29];
let result = numbers.findIndex(myFunction);
// console.log(result); 
function myFunction(x, index, array) {
  return x > 18;
}


//findLast()- starts from the end of an array and returns the value of the first element that satisfies a condition.
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40)
// console.log(high); //42

//findLastIndex()- starts from the end of an array and returns the index of the first element that satisfies a condition.
const temperature = [27, 28, 30, 40, 42, 35, 30];
let highIndex = temperature.findLastIndex(x => x > 40)
// console.log(highIndex); //4



/*++++++++++++++++++++++++ARRAY SORTING METHODS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//sort()-sorts an array alphabetically.Sorts values as Stings.If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
//sort() method will produce incorrect result when sorting numbers.
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits3.sort());

//reverse()-reverses the elements in an array.
// console.log(fruits3.reverse());

//toSorted()-The difference between the new toSorted() method and the old sort() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
// console.log(fruits3.toSorted());

//toReversed()- {same as toSorted() and sort()}

/////////NUMERIC SORT////////

//By default, the sort() function sorts values as strings.If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
//You can fix this by providing a compare function:function(a, b){return a - b}
//When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

//If the result is negative, a is sorted before b.If the result is positive, b is sorted before a.If the result is 0, no changes are done with the sort order of the two values.

const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort(function(a, b){return a - b}));//ascending order

// console.log(points.sort(function(a, b){return b - a})); //descending order

//sorting array in random order
// console.log(points.sort(function(a, b){return 0.5 - Math.random()}));
//but this is not a reliable way to randomize an array.it favors some elements more than others.

//A better way to randomize an array is to use the Fisher-Yates (aka Knuth) Method/Shuffle:


//Math.min.apply()->to find the lowest number in an array.
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
// console.log(myArrayMin(points)); //1

//Math.max.apply()->to find the highest number in an array.
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
// console.log(myArrayMax(points)); //100

//SORTING OBJECT ARRAYS
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
// 


////////JS Iteration Methods//////////

//forEach()- calls a function once for each array element.
cars.forEach(function(car){
  // console.log(car.type);
  // console.log(car.year);

});
