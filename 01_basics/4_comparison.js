// console.log("2">1); //gives true because '2' is converted to number 2
// console.log("02">1);

/////////////////////////////////////////// 

// console.log(null>0); 
// console.log(null==0); 
// console.log(null>=0); 

//NOTE: the reason is that an equality check(==) and comparisons (<,>,<=,>=) work differently. COMPARISONS CONVERT NULL TO NUMBER(i.e. 0) but equality check doesn't. That's why null>=0 is true but null>0 is false.

// console.log(undefined==0); //false
// console.log(undefined>0); //false
// console.log(undefined<0); //false

//NOTE: undefined is not equal to anything. It is neither greater than nor less than anything. So all comparisons with undefined return false.


//************STRICT CHECK(===)************//
//It checks for both value and datatype
console.log("2"===2); //it won't perform conversion b/e they are of different datatypes