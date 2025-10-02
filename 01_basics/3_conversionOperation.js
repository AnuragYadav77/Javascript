// let score="33";
// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber= Number(score); //score has been converted to number.
// console.log(typeof valueInNumber);

// but

let score="33abc";
let valueInNumber= Number(score);
console.log(typeof valueInNumber); // it will still give output as - 'number'
console.log(valueInNumber); //to know what's exactly inside 'valueInNumber'. It returns NaN(i.e. Not a Number)


//////////////////////////////////////////////////////////

// let isLoggedIn=1
// let booleanIsLoggedIn= Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) //gives 'true'

// let isLoggedIn=""
// let booleanIsLoggedIn= Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)  //gives 'false'

let isLoggedIn="asdfgh"
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //gives 'true'

// Empty string gives 'false' and non-empty string gives 'true'

///////////////////////////////////////////////////////////

let a=2;
let atostring = String(a)
console.log(atostring)
console.log(typeof atostring)


