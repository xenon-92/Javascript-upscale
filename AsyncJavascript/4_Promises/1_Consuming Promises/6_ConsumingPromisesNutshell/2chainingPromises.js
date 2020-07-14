/** @format */

//thenables return a value
document
  .querySelector('.ChainingPromises')
  .addEventListener('click', function () {
    var p1 = delay(0, 300);
    var p2 = p1.then(function (value) {
      return `returned from first promise handler ${value}`;
    });
    p2.then(function (value) {
      return `returned from second promise handler + ${value}`;
    })
      .then(function (value) {
        return `returned from third promise handler + ${value}`;
      })
      .then(
        function (value) {
          masterDisplayer.innerHTML = value;
        },
        function (err) {
          masterDisplayer.innerHTML = err;
        }
      );
  });


//thenable return a promise
document
  .querySelector('.ChainingPromisesReturnsPromise')
  .addEventListener('click', function () {
    var arr = [];
    var p1 = delay(0, 1000);
    var p2 = p1
      .then(function (val) {
        arr.push(val);
        console.table(val);
        return delay(0, 1000 * 1);
      })
      .then(function (val) {
        arr.push(val);
        console.table(val);
        return delay(0, 1000 * 2);
      })
      .then(function (val) {
        arr.push(val);
        console.table(val);
        return delay(0, 1000 * 2);
      })
      .then(
        function (val) {
          arr.push(val);
          console.table(val);
          var str = '';
          arr.forEach(function (each) {
            str += each+" --> ";
          });
          masterDisplayer.innerHTML = str;
        },
        function (err) {
          console.log(err);
          masterDisplayer.innerHTML = err;
        }
      );
  });
