//add event listener to the posted message from the parent window via addEventListener

window.addEventListener('message',function(e){
document.querySelector('#comment').innerHTML = e.data;
});