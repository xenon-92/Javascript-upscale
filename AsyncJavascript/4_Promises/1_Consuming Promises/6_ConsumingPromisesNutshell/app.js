/**
 * Creation of promise
 *
 * @format
 */

function delay(p, t) {
  var promise = new Promise(function (resolve, reject) {
    var rand = Math.random();
    setTimeout(function () {
      if (rand > p) {
        resolve(rand);
      } else {
        reject(rand);
      }
    }, t);
  });
  return promise;
}

function delayWithError(p, t) {
  var promise = new Promise(function (resolve, reject) {
    var rand = Math.random();
    setTimeout(function () {
      if (rand > p) {
        resolve(rand);
      } else {
        reject(new Error('The promsie has been rejected...'));
      }
    }, t);
  });
  return promise;
}
var masterDisplayer = document.querySelector('.resultDisplayer');
