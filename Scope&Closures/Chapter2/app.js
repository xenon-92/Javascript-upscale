/** @format */

/**
 *
 * scope assignment
 */
function lexicalScopeAssignment(a) {
  // fromal parameter

  var b = a * 2; //scope assignment
  function bar(s) {
    //formal parameter
    console.log(s + 9);
  }
  bar(b * 2);
}

/**
 *
 * Scope look up with variable shadowing
 */
function scopeLookUp(s) {
  var a = s * 2; //2
  function middle(t) {
    var a = t * 2; //6
    function inner() {
      console.log(a); //it logs the value of t*2; //6
    }
    inner();
  }
  middle(3);
}
document.querySelector('.scopeLookUp').addEventListener('click', scopeLookUp);

/***
 * General pitfall with variable shadowing
 */

function outer(p) {
  var a = p * 6;
  function middle() {
    var a = a * 2; //undefined because a is hoisted while assigning the value it is undefined, also hoisting is perscope
    function inner() {
      console.log(a);
    }
    inner();
  }
  middle();
}

//The above function is interpreted by the engine as
// function outer(p) {
//   var a;
//   a = p * 6;
//   function middle() {
//     var a;
//     /**
//      * At this point the value of a is undefined
//      * so below a = undefined*2; NaN
//      */
//     a = a * 2; //NaN because a is hoisted while assigning the value it is undefined, also hoisting is perscope
//     function inner() {
//       console.log(a);
//     }
//     middle();
//   }
// }

document.querySelector('.scopeLookUpfitfall').addEventListener('click',function(){
    outer(2);
});


//Code correction
document.querySelector('.codeCorrection').addEventListener('click',function(){
    function outer(p) {
      var a = p * 6;
      function middle() {
        var x = a * 2; 
        function inner() {
          console.log(x);
        }
        inner();
      }
      middle();
    }
    outer(3);
});