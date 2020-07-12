//generate a promise

function delay(p, t) {
    var promsie = new Promise(
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
    return promsie;
}

//consuming a promise
var promise = delay(0.5, 2000); //promise object

//continue to work with others
console.log('doing some stuffs.....');
console.log('doing some other stuffs.....');
promise.then(function (res) {
    console.log('success', res)
}, function (err) {
    console.log('error', err);

});
console.log('doing some stuffs.....');
console.log('doing some other stuffs.....');
