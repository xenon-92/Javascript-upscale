
/**
 * sending message from main thread to worker thread
 */



var worker = new Worker('worker.js');
document.querySelector('.sendDataToWorker').addEventListener('click', function (e) {
    var obj = {
        from: "main thread...",
        to: "worker thread that it spanned",
        info: ['apple', 'orange', 'banana']
    };
    worker.postMessage(obj);
});


/**
 * recieve message posted from worker thread
 */
var rcv = document.querySelector('.reciever');
worker.addEventListener('message', function (e) {
    var elm = document.createElement('p');
    elm.innerHTML = JSON.stringify(e.data);
    rcv.appendChild(elm);
});