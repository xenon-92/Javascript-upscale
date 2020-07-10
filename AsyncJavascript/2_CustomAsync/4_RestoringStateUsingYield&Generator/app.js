function* calculatePIAsync() {
    var state = {};
    state.pi = 0;
    state.k = 0;
    for (var i = 1; i < 100000000; i++) {
        state.k++;
        state.pi += 4 * Math.pow(-1, i + 1) / (2 * i - 1);
        if (Math.trunc(i / 1000) * 1000 === i) {
            yield state;
        }
    }
    return state;
}

function calculatePi() {
    var iteratorObj = calculatePIAsync();
    window.addEventListener('message', resume);

    function resume() {
        var nex = iteratorObj.next();
        if (nex.done) {
            return;
        }
        counter.innerHTML = nex.value.k;
        piVal.innerHTML = nex.value.pi;
        window.postMessage('eventFired', '*');

    }

    window.postMessage('startEvent', '*');
    return;
}
var counter = document.querySelector('.counter');
var piVal = document.querySelector('.piVal');
document.querySelector('.calculatePI').addEventListener('click', calculatePi);


//alert
var alertElem = document.querySelector('.alertHere');
var counterK = 0;
document.querySelector('.block').addEventListener('click', function (e) {
    alertElem.innerHTML = `dummy text added for the ${counterK++} times`;
});