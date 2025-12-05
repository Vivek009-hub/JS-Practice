const accountId = 12345;
let accountEmail = "hitesh@example.com"
var accountPassword = "password@123";
accountCity = "Bangalore";
let accountState;
/*
Note: Prefer not to use "var" becoasue of issue in block scope and function scope
*/

console.log(accountId);
console.log(accountEmail);
console .log(accountPassword);
console .log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);