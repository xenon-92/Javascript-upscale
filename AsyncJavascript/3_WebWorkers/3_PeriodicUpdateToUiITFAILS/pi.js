this.addEventListener('message', function (e) {
    if (e.data != 'hey wroker, do calculation') {
        return;
    }
    calculatePi();
});

function calculatePi() {
    var state = {};
    state.k = 0;
    state.pi = 0;
    setInterval(this.postMessage(state), 100);
    for (var j = 0; j < 1000000000; j++) {
        state.k++;
        state.pi += 4 * Math.pow(-1, state.k + 1) / (2 * state.k - 1);
    }
    this.postMessage(state);
}