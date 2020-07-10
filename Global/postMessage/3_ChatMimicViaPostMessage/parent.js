/** @format */

var childWindRef;

/**
 * parent window listener
 */
document
  .querySelector('.parentPost')
  .addEventListener('click', function (e) {
      var textEnterd = getTextValue();
      childWindRef.postMessage(textEnterd,'*');
  });

/**
 * get value of text box
 */

function getTextValue(){
    return document.querySelector('#comment').value;
}

/**
 * open child window
 */
document.querySelector('.popupOpener').addEventListener('click', function (e) {
  childWindRef = window.open('child.html','popup','height=600px,width =800px');
});

/**
 * incoming place holder
 */
var incomingPlaceHolder = document.querySelector('.incomingPlaceHolder');
window.addEventListener('message',function(e){
var textElem = document.createElement('p');
textElem.innerHTML = e.data;
incomingPlaceHolder.appendChild(textElem);
});



/**
 * cosmetic changes to look good
 */
document.querySelector('#comment').addEventListener('click',function(e){
e.target.value = '';
});