/** @format */

function computePiAsync() {
  var counter = document.querySelector('.count');
  var piVal = document.querySelector('.piVal');
  var state = {};
  state.pi = 0;
  state.k = 0;

  function computePi() {
    if (state.k >= 10000000) {
      return;
    }
    for (var i = 0; i <= 1000; i += 1) {
      state.k++;
      state.pi += (4 * Math.pow(-1, state.k + 1)) / (2 * state.k - 1);
    }
    //periodically update the UI
    counter.innerHTML = state.k;
    piVal.innerHTML = state.pi;
    //end of update of UI
    setTimeout(computePi, 0);
  }
  setTimeout(computePi, 0);
  return;
}

//start calculation
document.querySelector('.getPI').addEventListener('click', function (e) {
  computePiAsync();
});

//reload
document.querySelector('.reload').addEventListener('click', function (e) {
  location.reload();
});

//add dummy data
var counter =0;
document.querySelector('.add').addEventListener('click', function (e) {
  document.querySelector('.addedVal').innerHTML = `added dummy data for ${counter++} times`;
});