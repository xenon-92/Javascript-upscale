/** @format */

/**
 * Main fnction that calls an ajax and a callback function is passsed for the
 * final value of the result
 */
function getDummyData(url, cb) {
  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest();
    xhr.open('Get', url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          cb(null, xhr.response);
        } else {
          cb(new Error('failure to call the ajax'));
        }
      }
    };
  } else {
    console.log('your broswer does not support XMLHttpRequest');
  }
}

/**
 * An array of url some of them might  display error
 */
var url1 = 'https://jsonplaceholder.typicode.com/posts';
var url2 = 'https://jsonplaceholder.typicode.com/posts/1';
var url3 = 'https://jsonplaceholder.typicode.com/posts/1/comments';
var url4 = 'https://jsonplaceholder.typicode.com/posts?userId=1';
var url5 = 'https://jsonplaceholder.typicodes.com/posts/1';
var url6 = 'https://jsonplaceholder.typicodes.com/posts?userId=1';

var urls = [];
urls.push(url1, url2, url3, url4, url5, url6);

//eventandler for ajax
document.querySelector('.ajaxBtn').addEventListener('click', function (e) {
  e.target.disabled = true;
  /**
   * random URL
   */
  let randomUrl = urls[Math.floor(Math.random() * urls.length)];
  getDummyData(randomUrl, function callback(err, success) {
    if (err) {
      handleError(err);
    } else {
      //success
      handleSuccess(err, success);
    }
  });
  e.target.disabled = false;
});

var dsiplaySection = document.querySelector('.addData');
var dsiplaySmiley = document.querySelector('.smiley');

function handleError(err) {
  dsiplaySmiley.innerHTML = '&#128534;';
  dsiplaySection.innerHTML = '';
  dsiplaySection.innerHTML = err;
}
function handleSuccess(err, success) {
  dsiplaySmiley.innerHTML = '&#128512;';
  dsiplaySection.innerHTML = '';
  dsiplaySection.innerHTML = success;
}

/**
 * Alert button
 */
document.querySelector('.alert').addEventListener('click', function (e) {
  alert('alert button clicked!');
});
