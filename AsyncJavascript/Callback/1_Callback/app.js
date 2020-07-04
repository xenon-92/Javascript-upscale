/** @format */

document
  .querySelector('.longrunning')
  .addEventListener('click', function (event) {
    //   event.target.disabled =true;
    var now = new Date();
    var then;
    for (var i = 0; i < 100000000; i++) {
      then = new Date();
    }
    var timespan = then - now;
    var elem  = document.createElement('p');
    var parent = document.querySelector('.param');
    parent.appendChild(elem);
    elem.innerHTML = timespan.toString();
    // event.target.disabled = false;
  });

//alert button
document.querySelector('.alert').addEventListener('click',function(event){
    setInterval(function () {
      console.log(event);
    }, 1000);
});