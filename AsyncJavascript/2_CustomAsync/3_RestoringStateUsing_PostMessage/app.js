/** @format */

function calculatePiAsync() {
  var state = {};
  state.k = 0;
  state.pi = 0;
  window.addEventListener('message', calculatePI, false);
  function calculatePI() {
    if (state.k >= 1000000000) {
      return;
    }
    for (var i = 0; i < 1000; i++) {
      state.k++;
      state.pi += (4 * Math.pow(-1, state.k + 1)) / (2 * state.k - 1);
    }
    //update the data in the UI
    counter.innerHTML = state.k;
    piVal.innerHTML = state.pi;
    window.postMessage('eventFired', '*');
  }
  window.postMessage('eventFired', '*');
}

var counter = document.querySelector('.counter');
var piVal = document.querySelector('.piVal');
var alertVal = document.querySelector('.alertHere');
var counterk = 0;

/**
 * start caluclation
 */

document.querySelector('.calculatePI').addEventListener('click', function (e) {
  calculatePiAsync();
});

/**
 * ocassional alert pop up here
 */
document.querySelector('.block').addEventListener('mouseenter', function (e) {
  alertVal.innerHTML = `The button clicked ${counterk++} times`;
});