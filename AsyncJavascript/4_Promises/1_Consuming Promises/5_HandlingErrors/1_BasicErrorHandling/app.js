/** @format */

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

/**
 * since the success handler is not present in p1,p2, it is propagated to p3's onSuccess handler
 */
var p1 = delay(0, 1000); //always resolves
var p2 = p1.then(null, function (val) {
  //onError function is not required
  console.log(val);
});
var p3 = p2.then(null, function (val) {
  //onError function is not required
  console.log(val);
});
var p4 = p3.then(
  function (val) {
    console.log(val);
  },
  function (val) {
    //onError function is not required
    console.log(val);
  }
);
