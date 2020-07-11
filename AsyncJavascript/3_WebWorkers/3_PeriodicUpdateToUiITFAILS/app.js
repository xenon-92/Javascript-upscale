
/**
 * calculation of pi
 */
var lop = 0;
var counter = document.querySelector('.count');
var piVal = document.querySelector('.piVal');
document.querySelector('.getPI').addEventListener('click', function (e) {
    if (window.Worker) {
        var worker = new Worker('pi.js');
        worker.addEventListener('message', function (e) {
            lop++;
            counter.innerHTML = e.data.k;
            piVal.innerHTML = e.data.pi;
            console.log(lop);
        });
        worker.postMessage('hey wroker, do calculation');
    }
    else {
        console.log('browser not supported...');
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