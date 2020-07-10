/** @format */

/**
 * incoming place holder
 */
var incomingPlaceHolder = document.querySelector('.incomingPlaceHolder');
//listen to the message sent from parent
window.addEventListener('message', function (event) {
  var spanToAdd = document.createElement('p');
  spanToAdd.innerHTML = event.data;
  incomingPlaceHolder.appendChild(spanToAdd);
});

/**
 * outgoing place holder
 */
var parentRefrence = window.opener;
document.querySelector('.postMessage').addEventListener('click', function (e) {
  var txt = getTextVal();
  parentRefrence.postMessage(txt, '*');
});

//get value from text area
function getTextVal() {
  return document.querySelector('#comment').value;
}


/**
 * cosmetic changes to look good
 */
document.querySelector('#comment').addEventListener('click',function(e){
e.target.value = '';
});