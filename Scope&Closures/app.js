/**
 * LHS vs RHS assignment
 * var a=9 --here a is LHS assigned
 * var a = b+8; -- here b is RHS assigned
 * console.log(c) -- here c is RHS assigned
 *
 * @format
 */

/**
 * Types of error for RHS assignment
 * Reference error VS Type error
 *
 * Reference error: Reference error arises due to scope resolution failure error
 * ex: in fresh console, console.log(a); // gives reference error as a is not referenced
 *
 * Type error arises when scope resolution was successful but we tried to do something which is illegal at that point
 * ex: in fresh console, var x; console.log(x.toString());
 */

// Example reference error
document
  .querySelector('.reference-error')
  .addEventListener('click', function (event) {
    (function referenceError(a) {
      console.log(a + b);
      b = a;
    })(2);
  });

document.querySelector('.NaN').addEventListener('click', function (e) {
  (function Nan(a) {
    console.log(a + b);
    var b = a;
  })(2);
});

//The above IIFE is transformed by the JS engine as below due to hositing
//  (function Nan(a) {
//    var b;
//    console.log(a + b);
//    b = a;
//  })(2);

document.querySelector('.typeErr').addEventListener('click', function (event) {
  (function (a) {
    console.log(a + b.toString());
    var b = a;
  })(3);
});

//In the above IIFE due to hosting the b has a value of undefined, the scope resolution was successful
// but b.toString() is equivalent to undefined.toString() which is a illegal operation resulting in Type error

document.querySelector('.refOrTyp').addEventListener('click', function (event) {
  (function (a) {
    console.log(a + b.toString());
    b = a;
  })(3);
});

//The secnario above matches for both type error and reference error, but reference error is thrown as 
//the scope resolution error is encountered first
