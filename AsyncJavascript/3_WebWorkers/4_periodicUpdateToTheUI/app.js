/**
 * start calculation
 */
var workerRef;
document.querySelector('.getPI').addEventListener('click', function (e) {
    workerRef = new Worker('pi.js');
    workerRef.postMessage('start');
});

//updation of the value of the pi
var counter = document.querySelector('.count');
var piVal = document.querySelector('.piVal');
document.querySelector('.update').addEventListener('click', function (e) {
    workerRef.addEventListener('message', function (e) {
        counter.innerHTML = e.data.k;
        piVal.innerHTML = e.data.pi;
    });
    workerRef.postMessage('update');
});

/***
 * dummy data additions
 */
var dummyElem = document.querySelector('.addedVal');
var counterK = 0;
document.querySelector('.add').addEventListener('click', function () {
    dummyElem.innerHTML = `dummy text added for ${counterK++} times`;
});