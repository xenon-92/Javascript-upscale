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

var p1 = delay(0, 1000).then(function (val) {
    console.log(val);
    return "faky";
});
var p2 = p1.then(function (val) {
    console.log(val);
});