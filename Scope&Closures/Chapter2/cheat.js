/** @format */

document.querySelector('.cheatLexical').addEventListener('click', function () {
  console.log(eval('4+4'));
  console.log(eval(new String('8-4')));
  console.log(eval('new String(7+3)'));
  var b = 10;
  function evalCheat(str, a) {
    eval(str); //after this varaible b is defined in its own scope, so it does not do scope traversal to fetch the value of
    // b=10
    console.log(a + b);
  }
  evalCheat('var b=66', 2);
});

//check with
var obj = { q: 2, r: 6 };

// we can change the value of with one go
wither(obj);
function wither(o) {
  with (o) {
    q = 66;
    r = 99;
  }
  console.log(o);
}
console.log(obj);

//but supposingly we do this, the unmapped varaiable leak to the global scope
document.querySelector('.cheatwith').addEventListener('click', function () {
  (function (o) {
    with (o) {
      qk = 66666666;
      r = 1000000;
    }
  })(obj);
  console.log(obj); //{q:66,r:1000000}
  console.log(obj.qk); //undefined
  console.log(window.qk); //66666666 , leaked to the global
  console.log('window.qk === qk', window.qk === qk, window.qk, qk);
});
