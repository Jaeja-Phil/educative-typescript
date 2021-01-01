/**
 * In JS, variables declared with var and function declarations are "hoistsed" to the top of the file. For example...
 */

a = "this technically won't throw an error in JS";
var a = "becuase this line will be hoisted to the top";

/**
 * But, when using let or const, they are not hoisted, so it WILL throw an error
 */

b = "now it will throw an error";
let b = "becuase let's are not hoisted";

