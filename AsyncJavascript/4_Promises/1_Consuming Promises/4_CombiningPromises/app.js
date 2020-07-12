function delay(p, t) {

    var promiseObj = new Promise(function (resolve, reject) {
        var rand = Math.random();
        setTimeout(function () {
            if (rand > p) {
                resolve(rand);
            }
            else {
                reject('Error is thrown : ' + rand);
            }
        }, t);
    });
    return promiseObj;
}

var parentElem = document.querySelector('.section');
document.querySelector('.prmiseAll').addEventListener('click', function () {
    var p1 = delay(0, 3000);
    var p2 = delay(0, 4000);
    var p3 = delay(0, 1000 * 10);
    var pMaster = Promise.all([p1, p2, p3]);
    pMaster.then(function (promsieArray) {
        var e1 = document.createElement('p');
        e1.innerHTML = promsieArray[0];
        var e2 = document.createElement('p');
        e2.innerHTML = promsieArray[1];
        var e3 = document.createElement('p');
        e3.innerHTML = promsieArray[2];
        parentElem.appendChild(e1);
        parentElem.appendChild(e2);
        parentElem.appendChild(e3);
    });
});

document.querySelector('.alerter').addEventListener('click', function () {
    console.log('something to write to console....');
});

document.querySelector('.prmiseRace').addEventListener('click', function (e) {
    var p1 = delay(0.5, 1000);
    var p2 = delay(0.5, 1000);
    var p3 = delay(0.5, 1000);
    var promiseMaster = Promise.race([p1, p2, p3]);
    var e1 = document.createElement('p');
    parentElem.appendChild(e1);
    promiseMaster.then(function (value) {
        console.log(value);
        e1.innerHTML = value;
    },
        function (errVal) {
            console.log(errVal);
            e1.innerHTML = errVal;
        });
});