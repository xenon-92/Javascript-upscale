/** @format */

document.querySelector('.basicPromise').addEventListener('click', function () {
  var p1 = delay(0.5, 500);
  var p2 = p1.then(
    function (val) {
      masterDisplayer.innerHTML = `Success the value is above 0.5, the Value: ${val}, handled by resolve `;
    },
    function (val) {
      masterDisplayer.innerHTML = `Failure the value is above 0.5, the Value: ${val}, handled by reject`;
    }
  );
});
