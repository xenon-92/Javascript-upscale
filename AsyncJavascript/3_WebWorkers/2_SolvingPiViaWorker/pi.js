this.addEventListener('message', function (e) {
    if (e.data != 'calculatePi') {
        return;
    }
    var res = calculatePiAsync();
    this.postMessage(res);
});

//calculate pi
function calculatePiAsync() {
    var state = {};
    state.k = 0;
    state.pi = 0;
    for (var i = 0; i < 100000000; i++) {
        state.k++;
        state.pi += 4 * Math.pow(-1, state.k + 1) / (2 * state.k - 1);
    }
    return state;
}