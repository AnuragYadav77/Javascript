const accountId = 123456 //const is used to declare constants.
let accountEmail = "jack@gmail.com" //let is used to declare variables
var accountPassword = "12345" //var is also used to declare variables.
accountCity = "Jaipur" //in JS we can reserve memory of a variable without writing a keyword, but it should be avoided
let accountState; // in JS if you leave a declared variable without assigning any value to it, then JS considers it as 'undefined'.
// accountId=2 // not allowed b/e const keyword was used to declare this variable
console.log(accountId);

accountEmail = "gss@gmail.com"
accountPassword = "5432"
accountCity = "delhi"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var because of issue in block scope and functional scope
*/
