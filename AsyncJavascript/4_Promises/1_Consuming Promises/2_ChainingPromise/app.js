function delay(p, t) {
    var promise = new Promise(
        function (resolve, reject) {
            setTimeout(function () {
                var r = Math.random();
                if (r > p) {
                    resolve(`passing the random generated value which is ${r}`);
                }
                else {
                    reject(`passing rejected value ${r}`);
                }
            }, t);
        }
    );
    return promise;
}
console.log('some result.............');
var promsie1 = delay(0, 1000);//this always succeeds
var promsie2 = promsie1.then(function (res) {
    console.log(res);
    return 'from promise2 ' + res;
});
var promsie3 = promsie2.then(function (res) {
    console.log(res);
    return 'from promise3' + res;
});
var promise4 = promsie3.then(function (res) {
    console.log(res);
});