/**
 * Declaring with var
 */

var x;
function varIsAFunctionScope(){     
    var x = 123;    
    {             
        var x = 456;    
    }     
    console.log(x); 
}
varIsAFunctionScope() // console.logs 456
console.log(x) // undefined, var outside a function is not affected

/**
 * TIP: on tsconfig.json, set noEmitOnError: true to make sure ts doesnt compile when it finds an error
 */

/**
 * Declaring with let
 */

function varLetFunction(){
  var varValue = "var";
  let strValue = "let";
  if(true){
      var varValue = 123; // this will produce an error --> subsequent variable declaration must have the same type
      let strValue = 12345;
  }
}

/**
 * Declaring with const
 * 
 * using const gives a "protection" upon reassigning a variable, so it is recommended to use const when you don't plan on reassigning (usually use it on reference types like arrays and objects)
 */

const list = [1,2,3];
list = [1,2,3,4]; // this will produce an error!

/**
 * There is no type declaration so far.
 * Implicitly, TS defines the types for you when it is obvious.
 * For example, when you hover on list, it will be a type number[] (array of numbers)
 * While there are some cases where you want TS to do this implicitly, you also may want to explicitly declare the types.
 * You can do so by doing the following:
 * 
 * var var1: number;
 * let let1: string;
 * const const1: boolean;
 */