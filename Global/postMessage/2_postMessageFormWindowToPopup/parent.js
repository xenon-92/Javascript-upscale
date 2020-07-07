/** @format */

document
  .querySelector('.postMessage')
  .addEventListener('click', function (event) {
    var textareaVal = GetTextAreaVal();
    targetWindowRefrence.postMessage(textareaVal, '*');
  });

function GetTextAreaVal() {
  return document.querySelector('#comment').value;
}
var targetWindowRefrence; 
document.querySelector('.popupOpener').addEventListener('click', function () {
  //open child window
  targetWindowRefrence = window.open(
    'popup.html',
    'popup',
    'height=300px, width=500px'
  );
});
