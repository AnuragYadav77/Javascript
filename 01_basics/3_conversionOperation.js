/*
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
*/

// ***********************Operations*****************
let value =3;
let negValue = -value; //negation operation
//console.log(negValue);

let str1 = "Hello";
let str2 = "World";
let str3= str1+str2;
// console.log(str3); //gives HelloWorld

///////////////////////////////////////////////
console.log("1"+2); //gives 32 //when string first, all others are treated as string
console.log(1+"2"); //gives 12
console.log("1"+2+2); //gives 122

/////BUT//////
console.log(1+2+"2"); //gives 32 // when number first, all others are treated as number till string comes
///////////////////////////////////////////
//some tricky conversions
console.log(true); //gives 'true'
console.log(+true); //gives 1.....similarly -ture gives -1
console.log(+"") ; //gives 0