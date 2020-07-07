/** @format */

/**
 * sender of the message
 */
document.querySelector('.postMessage').addEventListener('click', function (e) {
  var inputText = getInput();
  window.postMessage(inputText, '*');
});
function getInput() {
  return document.querySelector('#comment').value;
}

/**
 * reciever of the message
 */
var dest = document.querySelector('.destination');
window.addEventListener('message', function (e) {
  dest.innerHTML = e.data;
});


/**
 * cosmetic purpose
 */
document.querySelector('#comment').addEventListener('click',function(e){
dest.innerHTML = 'Your entered text will appear here';
e.target.value='';
});