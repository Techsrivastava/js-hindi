const accountId = 14453;
let accountEmail = "abc@gmail.com";
var accountPassword = "123";
let accountCity = "Allahahabd";
let accountState= "utter pradesh"

// accountId = 2  Not Allowed

accountEmail = "he@ac.com";
accountPassword = "345354";
accountCity = "Azamgarh";

console.log(accountId);

/*
Prefer not to use Var
 because of isseu in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
