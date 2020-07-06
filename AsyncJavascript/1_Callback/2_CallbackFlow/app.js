/** @format */

//general flow of execution
console.log(1);
console.log(2);
console.log(3);

//asynchronous flow of execution
console.log('start');
setTimeout(function () {
  console.log('middle');
}, 1000);
console.log('end');

//nested callback
function nester(){
    setTimeout(function () {
      //doA
      doB();
      setTimeout(function () {
        //doC
        doE();
      }, 0);
      doF();
    }, 0);
    doG();
}

function doB() {
  console.log('doB called.....');
}
function doE() {
  console.log('doE called.....');
}
function doF() {
  console.log('doF called.....');
}
function doG() {
  console.log('doG called.....');
}

document.querySelector('.nestedCb').addEventListener('click', nester);