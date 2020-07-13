/** @format */

function delay(p, t) {
  var promise = new Promise(function (resolve, reject) {
    var rand = Math.random();
    setTimeout(function () {
      if (rand > p) {
        resolve(rand);
      }
      //   reject(rand);
      reject(new Error('custom error'));
    }, t);
  });
  return promise;
}

//always gets rejected
var p1 = delay(1, 1000);
var p2 = p1.then(function (value) {
  console.log(value);
}, null);
var p3 = p2.then(
  function (value) {
    console.log(value);
  },
  function (val) {
    console.log(val);
    return 'this text will go from error to success handler';
  }
);
var p4 = p3.then(function (val) {
  console.log('sucess handler of p3 ' + val);
},function(value){
console.log('error handler of p3 ' + value);
});
