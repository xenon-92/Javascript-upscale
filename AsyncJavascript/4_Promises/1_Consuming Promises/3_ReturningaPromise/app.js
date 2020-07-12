function delay(p, t) {
    var promise = new Promise(
        function (resolve, reject) {
            setTimeout(function () {
                var rand = Math.random();
                if (rand > p) {
                    resolve(rand);
                }
                else {
                    reject(rand);
                }
            }, t);
        }
    );
    return promise;
}

var promise1 = delay(0, 4000);
var promsie2 = promise1.then(function (res) {
    console.log(res);
    return delay(0, 3000);
});
var promsie3 = promsie2.then(function (res) {
    console.log(res);
    return delay(0, 2000);
});
var promsie4 = promsie3.then(function (res) {
    console.log(res);
});
var parentElem = document.querySelector('.paster');
document.querySelector('.alert').addEventListener('click', function (e) {
    var elm = document.createElement('p');
    elm.innerHTML = 'text added';
    parentElem.appendChild(elm);
});

