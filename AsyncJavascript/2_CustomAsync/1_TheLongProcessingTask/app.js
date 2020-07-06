/** @format */

// The curious case of Pi

function computePI() {
  var state = {};
  state.k = 0;
  state.pi = 0;
  for (var i = 0; i < 1000000000; i++) {
    state.k++;
    state.pi += (4 * Math.pow(-1, state.k + 1)) / (2 * state.k - 1);
  }
  return state;
}

//button
var btn = document.querySelector('.getPI');
btn.addEventListener('click', function (event) {
  event.target.disabled = true;
  document.querySelector('.reload').disabled=true;
  var result = computePI();
  counter.innerHTML = result.k;
  piVal.innerHTML = result.pi;
  event.target.disabled = false;
  document.querySelector('.reload').disabled = false;
});

var counter = document.querySelector('.count');
var piVal = document.querySelector('.piVal');

document.querySelector('.reload').addEventListener('click',function(){
location.reload();
});

document.querySelector('.add').addEventListener('click', function () {
  document.querySelector('.addedVal').innerHTML = "some item added";
});
