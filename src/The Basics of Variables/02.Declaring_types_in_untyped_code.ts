/**
 * You can use declare keyword to tell TS that the variable exists even though it doesnt exist in current file or in loaded module.
 * In many libraries, they provide @types/library_name, which has a d.ts file. This includes all the declarations that the library has.
 * Officially, this is called "ambient declaration"
 */

 declare let declaredVar: number;
 let someVar = declaredVar + 1;

/**
 * You can also declare functions (or pretty much any type)
 */

declare function ambientFunction(data: number): void;

function customFunc(num: number) {
  ambientFunction(num);
}

/**
 * useful links to get @types/library_name
 * github: DefinitelyTyped: https://github.com/DefinitelyTyped/DefinitelyTyped
 * TS type search: https://www.typescriptlang.org/dt/search?search=
 * 
 * If you can't find definitions files still, check if the library includes "types" or "typings" field in package.json file
 * Alertnatively, you can look for d.ts file and include them with <reference path="" />
 */