const name="anurag"
const repo=3
// console.log(name+repo+" value") // outdated syntax

//modern way using template literals(backticks i.e ``) and ${}-interpolation(used to inject variables inside string)

// console.log(`Hello my name is ${name} and I have ${repo} repos`) //its called string interpolation

/************************************************/
// const game= new String("football") //string object
// console.log(game[0]);
// console.log(game.__proto__);//gives all the methods available for string datatype
// console.log(game.length);
// console.log(game.toUpperCase());
// console.log(game.charAt(2));
// console.log(game.indexOf('o')); //gives first occurence of 'o'


//important methods

//substring()
const game= new String("foot-ball")
const newString= game.substring(0,4);
console.log(newString);

//slice()
const anotherString= game.slice(-8,4);// we can give negative indexing also in slice
console.log(anotherString);

//trim()
const newstring1="    hello     "
console.log(newstring1);
console.log(newstring1.trim()); //removes spaces from starting and ending

//replace()
const url="https://www.google.com/anurag%20yadav%20singh"; //in a url space is represented by '%20'
console.log(url.replace('%20','-'));//replaces first occurence of '%20' with '-'
console.log(url.replaceAll('%20','-'));//replaces all occurences of '%20' with '-'

console.log(url.includes('google')); //gives true if 'google' is present in url else false

//split()
console.log(game.split('-')); //splits the string at '-' and returns an array of substrings
console.log(url.split('/')); 