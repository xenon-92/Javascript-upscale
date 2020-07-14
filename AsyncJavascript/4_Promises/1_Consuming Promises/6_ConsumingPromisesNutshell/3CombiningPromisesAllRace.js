/** @format */

document.querySelector('.promiseAll').addEventListener('click', function () {
  var p1 = delay(0, 100)
    .then(function (val) {
      console.log(val);
      return delay(0, 200);
    })
    .then(function (val) {
      console.log(val);
      return delay(0, 300);
    });
  var p2 = delay(0, 300)
    .then(function (val) {
      console.log(val);
      return delay(0, 500);
    })
    .then(function (val) {
      console.log(val);
      return delay(0, 700);
    });

  //master promise
  var master = Promise.all([p1, p2]);
  master.then(function (arrValues) {
    //values recieved in array
    console.log(arrValues[0]);
    console.log(arrValues[1]);
    var str = '';
    arrValues.forEach(function (each) {
      str += each + '-->';
    });
    masterDisplayer.innerHTML = str;
  });
});
document.querySelector('.promiseRace').addEventListener('click', function () {
  var p1 = delayWithError(0.5, 100)
    .then(function (val) {
      console.log(val);
      return delay(0.5, 200);
    })
    .then(function (val) {
      console.log(val);
      return delay(0.5, 300);
    });
    // .catch(function (err) {
    //   console.table(err);
    // });
  var p2 = delay(0.5, 300)
    .then(function (val) {
      console.log(val);
      return delay(0.5, 500);
    })
    .then(function (val) {
      console.log(val);
      return delay(0.5, 700);
    });
    // .catch(function (err) {
    //   console.table(err);
    // });

  //master promise
  var master = Promise.race([p1, p2]);
  master
    .then(function (val) {
      //race does not abort other ongoing task
      console.log(val);
      masterDisplayer.innerHTML = val;
    })
    .catch(function (err) {
      console.table(err);
    });
});
