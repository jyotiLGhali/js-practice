const accountId = 12212;
let accountName = "Jyoti";
var accountEmail = "jyoti@gmail.com";
accountState = "Karnataka";

// Prefer not use var becouse of issue in block scope and functionalscope

//let and var are block scope
//by default without datatype it will create var
//let and var can be reinitialized  canst can't be reintialized

console.table([accountId, accountEmail, accountName,accountState])