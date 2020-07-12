function* calculatePiAsync() {
    var state = {};
    state.pi = 0;
    state.k = 0;
    for (var i = 1; i < 100000000000000; i++) {
        state.k++;
        state.pi += 4 * Math.pow(-1, state.k + 1) / (2 * state.k - 1);
        if (Math.trunc(i / 1000) * 1000 === i) { yield state; }
    }
}
var stateGlobal;
function coumputePi() {
    var iteratorObj = calculatePiAsync();
    function resume() {
        var nex = iteratorObj.next();
        if (nex.done) {
            this.postMessage(stateGlobal);
            return;
        }
        stateGlobal = nex.value;
        setTimeout(resume, 0);
    }
    setTimeout(resume, 0);
}
//controller function of the UI
this.addEventListener('message', function (e) {
    var command = e.data;
    switch (command) {
        case 'start':
            coumputePi();
            break;
        case 'update':
            this.postMessage(stateGlobal);
            break;
        default:
            break;

    }
});