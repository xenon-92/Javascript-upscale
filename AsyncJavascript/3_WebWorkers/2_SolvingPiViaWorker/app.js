

/**
 * pi calculation
 */
var counter = document.querySelector('.count');
var pival = document.querySelector('.piVal');
document.querySelector('.getPI').addEventListener('click', function (e) {
    if (window.Worker) {
        var worker = new Worker('pi.js');
        worker.addEventListener('message', function (e) {
            counter.innerHTML = e.data.k;
            pival.innerHTML = e.data.pi
        });
        worker.postMessage('calculatePi');

    }
    else {
        console.log('your window does not support worker thread....');
    }
});

/**
 * reload
 */
document.querySelector('.reload').addEventListener('click', function () {
    location.reload();
});
/***
 * dummy data additions
 */
var dummyElem = document.querySelector('.addedVal');
var counterK = 0;
document.querySelector('.add').addEventListener('click', function () {
    dummyElem.innerHTML = `dummy text added for ${counterK++} times`;
});