//listen to the message send by the main thread
//and log the data
this.addEventListener('message', function (e) {
    console.log(e.data, e);
});



//post a message to the main thread at an interval of 3 seconds
var obj = {
    from: 'worker',
    to: 'main',
    info: [22, 33, 44, 55, 66]
};
this.setInterval(function () {
    this.postMessage(obj);
}, 3000)