/** @format */

document.querySelector('.errBasic').addEventListener('click', function () {
  var p1 = delayWithError(0.5, 1000);
  var p2 = p1.then(
    function (val) {
      console.log(val);
      masterDisplayer.innerHTML = val;
    },
    function (err) {
      console.error(err);
      masterDisplayer.innerHTML = err;
    }
  );
});
/**
 *
 */
document
  .querySelector('.resolvedHandledLast')
  .addEventListener('click', function (event) {
    var p1 = delayWithError(0, 1000); //resolved everytime
    var p2 = p1
      .then(null)
      .then(null)
      .then(null)
      .then(
        function (val) {
          console.log(val);
          masterDisplayer.innerHTML = val;
        },
        function (err) {
          console.error(err);
          masterDisplayer.innerHTML = err;
        }
      );
  });

/**
 *
 */
document
  .querySelector('.rejectedYetreturns')
  .addEventListener('click', function (e) {
    var p1 = delayWithError(1, 1000); //rejects everytime
    var p2 = p1
      .then(null, function (err) {
        console.error(err);
        return err;
      })
      .then(
        function (val) {
          console.log(val);
          masterDisplayer.innerHTML = val;
        },
        function (err) {
          console.error(err);
          masterDisplayer.innerHTML = 'error happened..';
        }
      );
  });
/**
 *
 */

document
  .querySelector('.resolvedThrowsError')
  .addEventListener('click', function (e) {
    var p1 = delayWithError(0, 1000); //resolves everytime
    var p2 = p1
      .then(null, null)
      .then(
        function (val) {
          console.log(val);
          throw new Error('custom error thrown ...... ');
        },
        function (err) {
          console.log(err);
        }
      )
      .catch(function (err) {
        console.error(err);
        masterDisplayer.innerHTML = err;
      });
  });
