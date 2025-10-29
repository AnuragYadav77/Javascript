const score=400
// console.log(score);

const balance = new Number(100); //number object
// console.log(balance);

//toFixed method
// console.log(balance.toFixed(2)); //gives 2 decimal points

// toString method
// console.log(balance.toString()); //converts number to string,it will print the number but the datatype will be string.
// console.log(balance.toString().length) //gives 3 

// toPrecision method
const num2=23.8966;
// console.log(num2.toPrecision(3)); //gives total 3 digits including before and after decimal point (if we write 2 it will round off to 24 and if we give 1 it will round off to one precison value and rest will be converted to exponential form)

//toLocaleString method
const hundreds=1000000;
// console.log(hundreds.toLocaleString()); // gives 1,000,000 a/c to US STANDARDS format
// console.log(hundreds.toLocaleString("en-IN")); //gives in INDIAN standards



/*************************************MATHS*********************************************************/
// maths library comes by default with JS
console.log(Math) // it is an object within itself. It has many properties and methods

console.log(Math.abs(-4)); //gives absolute value 4
console.log(Math.round(-4.6));

//ceil and floor
console.log(Math.ceil(4.2)); //ceil means top value(if the number is slightly above 4 it will give 5)
console.log(Math.floor(4.8)); //floor means lower value (if the number is slightly below 5 it will give 4)

//min and max
console.log(Math.min(4,2,8,6,-1)); //gives minimum value -1
console.log(Math.max(4,2,8,6,-1)); //gives maximum value 8


//random
console.log(Math.random());//always gives random number between 0 to 1(excluding 1)
console.log(Math.random()*10); //gives random number between 0 to 10(excluding 10)
console.log(Math.floor(Math.random()*10)); //gives random integer between 0 to 9

const min=10;
const max=20;
console.log(Math.floor(Math.random() * (max-min+1)) + min)// we add 1 to avoid getting 0.
// we added min at last to shift the range from 0-10 to 10-20
