//Date objects are created with the new Date() constructor.


//There are 9 ways to create a new date object:
//https://www.w3schools.com/js/js_dates.asp(read from here)


let date= new Date();
// console.log(date);
// console.log(date.toString()); //date and time
// console.log(date.toDateString()); //date only
// console.log(date.toTimeString()); //time only
// console.log(date.toISOString()); //ISO standard format
// console.log(date.toLocaleString()); //locale specific date and time

// console.log(typeof date); //object

let specificDate= new Date(2025,11,1) //month is 0-indexed in JS so 11 is December
// console.log(specificDate.toDateString());

let specificDateTime= new Date(2025,11,1,10,30,0) //year, month, day, hour, minute, second
// console.log(specificDateTime.toLocaleString())

let newDate=new Date("2025-11-01");
// console.log(newDate.toLocaleString());


//NOTE: You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
const d = new Date(2018);
// console.log(d.toDateString());



//TIMESTAMPS
let myTimestamp= Date.now(); //milliseconds since January 1, 1970
// console.log(myTimestamp);
//NOTE:Date.now() is a static method of the Date object.
// You cannot use it on a date object like myDate.now().
// The syntax is always Date.now().



//METHODS IN DATE OBJECTS
let anotherDate= new Date();
// console.log(anotherDate.getFullYear());
// console.log(anotherDate.getMinutes());
// console.log(anotherDate.getMonth());
// console.log(anotherDate.getDate());

// console.log(anotherDate.toLocaleString('defualt',{
//     weekday:'long',
//     year:'numeric',
//     month:'long',
//     day:'numeric',
//     // timeZone:'IST'
// }));

// JS date inputs 
// There are generally 3 types of JavaScript date input formats:

// Type	           Example
// ISO Date	       "2015-03-25" (The International Standard),syntax-> (YYYY-MM-DD), (YYYY-MM) and  (YYYY).
// Short Date	   "03/25/2015"  , syntax-> "MM/DD/YYYY" .
// Long Date	   "Mar 25 2015" or "25 Mar 2015" ,syntax->"MMM DD YYYY" or "DD MMM YYYY" .Month names can be spelled out in full or abbreviated to the first three letters also they are case insensitive.


// Parsing Dates
// Date.parse() method parses a date string and returns the number of milliseconds since January 1, 1970.
let parsedDate= Date.parse("Nov,2, 2025");
// console.log(parsedDate);

//You can then use the number of milliseconds to convert it to a date object:
const datefromParsed= new Date(parsedDate);
// console.log(datefromParsed);


//NOTE:The difference between Local time and UTC time can be up to 24 hours.
// The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:
const givenDate= new Date(2025,10,2);
let diff= givenDate.getTimezoneOffset();
// console.log(diff);


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//SET DATE METHODS
const someDate= new Date("Nov 2,2024");
someDate.setFullYear(2025);
console.log(someDate.getFullYear())                   

someDate.setMonth(11); //December
console.log(someDate.getMonth())                   

someDate.setDate(25);
console.log(someDate.getDate())

someDate.setHours(10);
someDate.setSeconds(30);
console.log(someDate.getHours());
console.log(someDate.getMinutes())
console.log(someDate.getSeconds());


///Date Comparison
let date1= new Date("2025-11-01");
let date2= new Date("2025-12-01");

console.log(date1 < date2);
