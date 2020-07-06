function getAjaxData(url, cb) {
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
        xhr.open('Get', url, true);
        xhr.send();
        xhr.onload = function() {
            console.log(xhr.response);
            cb();
        };
        xhr.onerror = function() {
            console.log(new Error('an error was thrown'));
        }
    } else {
        console.log("your browser does not support XMLHttpRequest");
    }
}

// emitter
var btn = document.querySelector('.ajx');
var ajax = {};
ajax.getData = function(url) {
    getAjaxData(url, function() {
        var event = new CustomEvent('ajaxEvent', {
            bubbles: true,
            cancelable: true,
            detail: "ajax response is available"
        });
        btn.dispatchEvent(event);
    });
}

//listener
document.querySelector('.listener').addEventListener('ajaxEvent', function(e) {
    document.querySelector('.display').innerHTML = e.detail;
});
var uri = 'https://jsonplaceholder.typicode.com/posts/1';
btn.addEventListener('click', function() {
    ajax.getData(uri);
});