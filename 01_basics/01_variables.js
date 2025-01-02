const accountID = 123123
let accountEmail = "ali12@gmail.com"
var accountPassword = "1234"
accountCity = "Mardan"

let accountState;   // declare bt did not assighn any value to avaribale then you  find undefined 

// accountID = 2   this TypeError: Assignment to constant variable. theya re not allowed
/*
please do not use var bcz issue in block scope and functional scope 
*/

accountEmail = "ali1@gmail.com"
accountPassword = "21321"
accountCity = "Takht bhai"

console.log(accountID);
console.table([accountID , accountEmail , accountPassword , accountCity, accountState])




